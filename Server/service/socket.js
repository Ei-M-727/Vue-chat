const {
    saveMessage,
    getHistoryMessage,
    setMessageStatus,
    setReadStatus,
    updateMesStatus
} = require("../controller/message");

const { InsertGroupUsers } = require("../controller/group");

const { serverAddConversationList, userCheckIsMyFriend } = require("../controller/user");

const { addFriend } = require("../controller/friendly");

const socketIo = require("socket.io");

const tools = require("../utils/tools");

const appSocket = (server) => {
    const io = socketIo(server, {
        transports: ["websocket"],//socket.io设置websocket优先使用
    });

    const OnlineUser = {};

    io.on("connection", async (socket) => {
        //浏览器接受join事件，执行创建房间，发送joind事件给roomId房间的所有客户端，包括发送者
        socket.on("join", (obj) => {
            const { roomId, userName } = obj;
            socket.join(roomId);
            OnlineUser[userName] = socket.id;

            io.in(roomId).emit("joined", OnlineUser);
        });

        socket.on("update", (data) => {
            for (let i = 0; i < data.length; i++) {
                const roomId = data[i];
                socket.to(roomId).emit("update", "update");
            }
        });

        socket.on("test2", (data) => {
            console.log("收到", data);
        });

        socket.on("leave", (obj) => {
            const { roomId, userName } = obj;

            delete OnlineUser[userName];
            console.log("leave", OnlineUser);
            socket.leave(roomId, () => {
                socket.to(roomId).emit("leaved", OnlineUser);
            });
            //为随后的事件发射设置一个修饰符，事件只会广播到已加入给定的客户端room（套接字本身被排除）
            //要发射到多个房间，可以to多次打电话
        });

        socket.on("mes", async (obj) => {
            try {
                await saveMessage(obj);
                socket.to(obj.roomId).emit("mes", obj);
            } catch (error) {
                console.log("🚀 ~ file: socket.js:61 ~ socket.on ~ error:", error);

            }
        });

        //获取历史消息

        socket.on("getHisMeg", async (obj) => {
            try {
                const result = await getHistoryMessage(obj, 1);
                if (result && result.code == 200) {
                    socket.emit("getHisMeg", result.data);
                } else {
                    console.log("查询历史记录失败");
                }
            } catch (error) {
                console.log("🚀 ~ file: socket.js:78 ~ socket.on ~ error:", error);

            }
        });

        socket.on("getSysMeg", async (obj) => {
            try {
                const result = await getHistoryMessage(obj, -1);

                if (result && result.code === 200) {
                    socket.emit("getSysMeg", result.data);
                } else {
                    console.log("查询官方历史记录失败");
                }
            } catch (error) {
                console.log("🚀 ~ file: socket.js:87 ~ socket.on ~ error:", error);

            }
        });

        socket.on("agree", async (obj) => {
            //同意好友或加群申请
            try {
                if (obj.state === "group" || obj.state == "channel") {
                    const { userName, self, otherName, groupName, otherAvatar, groupPhoto, groupId, roomId, nickname, state } = obj;
                    try {
                        const result = await InsertGroupUsers(obj);
                        if (result.code === -1) {
                            console.log(result.msg);
                        }
                        const args = {
                            status: 1,
                            self,
                        };
                        await setMessageStatus(args);

                        //通知申请人验证已同意
                        const mesObj = {
                            roomId: self + "-" + roomId.split("-")[1],
                            userName: "",
                            mes: otherName + "同意你加入" + groupName + "!",
                            time: tools.formatTime(new Date()),
                            avatar: otherAvatar,
                            nickname: otherName,
                            groupName,
                            groupId,
                            read: [],
                            status: "1",//同意
                            state: state,
                            type: "info"
                        };

                        //保存通知消息
                        await saveMessage(mesObj);

                        const mesList = {
                            userName: groupName,
                            avatar: groupPhoto,
                            id: groupId,
                            type: state
                        };
                        //用户保存会话
                        await serverAddConversationList(userName, mesList);
                        socket.to(mesObj.roomId).emit("takeValidate", mesObj);

                        //通知群聊
                        const org = {
                            type: "org",
                            nickname: nickname,
                            time: tools.formatTime(new Date()),
                            roomId: groupId
                        };
                        //保存通知消息
                        await saveMessage(org);
                        //添加到群组的会话中
                        socket.to(org.roomId).emit("org", org);

                        socket.emit("ValidateSuccess", { msg: "ok" });
                    } catch (error) {
                        console.log("🚀 ~ file: socket.js:159 ~ socket.on ~ error:", error);

                    }
                } else if (obj.state === "friend") {
                    const { self, otherName, otherAvatar, roomId, avatar, friendRoom, userName, otherUserName } = obj;
                    const result = await addFriend(obj);
                    if (result.code === 200) {
                        const args = {
                            statis: "1",
                            self
                        };

                        await setMessageStatus(args);

                        const mesObj = {
                            userName: "",
                            mes: otherName + "同意了你的好友请求!",
                            time: tools.formatTime(new Date()),
                            avatar: otherAvatar,
                            nickname: otherName,
                            read: [],
                            state: "friend",
                            type: "info",
                            status: "1",//同意
                            roomId: self + "-" + roomId.split("-")[1],
                        };

                        await saveMessage(mesObj);

                        //申请人信息
                        const selfObj = {
                            userName: otherUserName,
                            avatar: otherAvatar,
                            id: friendRoom,
                            type: "friend",
                            friendId: roomId.split("-")[0]
                        };
                        //好友信息
                        const otherObj = {
                            userName: userName,
                            avatar: avatar,
                            id: friendRoom,
                            type: "friend",
                            friendId: self,
                        };

                        await serverAddConversationList(userName, selfObj);
                        await serverAddConversationList(otherUserName, otherObj);

                        socket.to(mesObj.roomId).emit("takeValidate", mesObj);
                        const org = {
                            type: "org",
                            nickname: otherUserName,
                            time: tools.formatTime(new Date()),
                            roomId: friendRoom
                        };

                        await saveMessage(org);

                        socket.to(friendRoom).emit("org", org);
                        socket.emit("ValidateSuccess", { msg: "ok" });
                    }
                } else {
                    console.log("添加好友失败");
                }

            } catch (error) {
                console.log("🚀 ~ file: socket.js:123 ~ socket.on ~ error:", error);

            }

            socket.on("refuse", async (obj) => {
                const args = {
                    status: "2",
                    _id: obj["_id"]
                };
                await updateMesStatus(args);
                if (obj.state === "group") {
                    const { otherName, groupName, otherAvatar, self, roomId } = obj;

                    const mesObj = {
                        roomId: self + "-" + roomId.split("-")[1],
                        userName: "",
                        mes: otherName + "拒绝了你的加入" + groupName + "的申请!",
                        time: tools.formatTime(new Date()),
                        avatar: otherAvatar,
                        nickname: otherName,
                        groupName,
                        read: [],
                        status: "2",//拒绝
                        state: "group",
                        type: "info"
                    };
                    //保存通知消息
                    await saveMessage(mesObj);
                    socket.to(mesObj.roomId).emit("takeValidate", mesObj);

                } else if (obj.state === "friend") {
                    const { otherName, otherAvatar, self, roomId } = obj;

                    const mesObj = {
                        roomId: self + "-" + roomId.split("-")[1],
                        userName: "",
                        mes: otherName + "拒绝了你的好友请求!",
                        time: tools.formatTime(new Date()),
                        avatar: otherAvatar,
                        nickname: otherName,
                        read: [],
                        status: "2",//拒绝
                        state: "friend",
                        type: "info"
                    };

                    //保存通知消息
                    await saveMessage(mesObj);
                    socket.to(mesObj.roomId).emit("takeValidate", mesObj);
                }
            });
            //已读状态
            socket.on("setReadStatus", async (obj) => {
                await setReadStatus(obj);
            });
            //发送验证消息
            socket.on("sendValidate", async (obj) => {
                await saveMessage(obj);
                socket.to(obj.roomId).emit("takeValidate", obj);
            });
            //reason回调参数(String)断开连接的原因(客户端或服务器)
            socket.on("disconnect", () => {
                let k;
                for (k in OnlineUser) {
                    if (OnlineUser[k] === socket.id) {
                        delete OnlineUser[k];
                    }
                }
                socket.broadcast.emit("leaved", OnlineUser);//广播通知该客户端下线
                console.log("user disconnected", OnlineUser);
            });
        });
    });
};

module.exports = appSocket;
