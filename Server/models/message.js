//导入mongoose 模块
const mongoose = require("mongoose");
//定义一个模式
//使用 Schema 构造器创建一个新的模式实例，使用构造器的对象参数定义各个字段。
const Schema = mongoose.Schema;

//消息模型
const messagesSchema = new Schema({
    roomId: String,//房间id
    userName: String,//用户登录名
    nickname: String,//用户昵称
    time: String,//时间
    avatar: String,//用户头像
    mes: String,//消息
    read: Array,//是否已读
    signature: String,//个性签名
    emoji: String,//表情地址
    style: String,//消息类型 emoji/mess/img/file
    groupId: String,//加入群聊名称
    groupName: String,//加入群聊头像
    groupPhoto: String,
    self: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },//申请人id、消息发送人
    other: String,//好友id
    otherName: String,//好友昵称
    otherUserName: String,
    otherAvatar: String,//好友头像
    otherLoginName: String,//好友登录名
    friendRoom: String,//好友房间
    state: String,//group/friend
    type: String,//validate
    status: String,//0 未操作 1 同意 2 拒绝
});

module.exports - mongoose.model("messages", messagesSchema);