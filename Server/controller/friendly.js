const FriendlyModel = require("../models/friendly");

//
const checkIsFriends = async (ctx) => {
    const { roomId } = ctx.request.body;
    try {
        const result = await FriendlyModel.find({
            roomId
        });
        if (result.length === 0) {
            return (ctx.body = {
                code: 200,
                data: { isFriends: false }
            });
        }

        ctx.body = {
            code: 200,
            data: { isFriends: true }
        };
    } catch (error) {
        console.log("🚀 ~ file: friendly.js:9 ~ checkIsFriends ~ error:", error);

    }
};

//查看我的好友列表

const findMyFriendsList = async (ctx) => {
    const { userId } = ctx.query;
    try {
        const self = await FriendlyModel.findFriendBySelf(userId);
        const other = await FriendlyModel.findFriendByOther(userId);
        let data = [];
        //重新组合
        self.forEach(item => {
            data.push({
                createDate: item.createDate,
                nickname: item.other.nickname,
                photo: item.other.photo,
                signature: item.other.signature,
                id: item.other._id,
                roomId: userId + "-" + item.other.id,
            });
        });
        other.forEach((item) => {
            data.push({
                createDate: item.createDate,
                nickname: item.self.nickname,
                photo: item.self.photo,
                signature: item.self.signature,
                id: item.self._id,
                roomId: item.self._id + "-" + userId,
            });
        });

        ctx.body = {
            code: 200,
            data: data
        };
    } catch (error) {
        console.log("🚀 ~ file: friendly.js:34 ~ findMyfriendsList ~ error:", error);

    }
};


const addFriend = async (obj) => {
    const { self, other, friendRoom } = obj;
    try {
        const result = await FriendlyModel.findOne({
            roomId: friendRoom
        });
        if (result) return (ctx.body = { data: -1, msg: "你们已经是好友了" });

        const newFriend = new FriendlyModel({
            self,
            other,
            roomId: friendRoom
        });
        await newFriend.save();
        return {
            code: 200,
            self: newFriend.self,
            other: newFriend.other
        };
    } catch (error) {
        console.log("🚀 ~ file: friendly.js:73 ~ addFriend ~ error:", error);

    }
};

const deleteFriend = async (ctx) => {
    const { roomId } = ctx.request.body;
    try {
        const result = await FriendlyModel.findOneAndDelete({ roomId });
        ctx.body = {
            code: 200,
            msg: "删除成功"
        };
    } catch (error) {
        console.log("🚀 ~ file: friendly.js:98 ~ deleteFriend ~ error:", error);

    }
};

module.exports = {
    checkIsFriends,
    findMyFriendsList,
    addFriend,
    deleteFriend,
};