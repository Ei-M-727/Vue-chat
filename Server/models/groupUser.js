//导入mongoose模块
const mongoose = require("mongoose");

//定义一个模式
//使用 Schema 构造器创建一个新的模式实例，使用构造器的对象参数定义各个字段。
const Schema = mongoose.Schema;

//群成员的集合
const groupUserSchema = new Schema({
    groupId: {
        type: Schema.Types.ObjectId,
        ref: "group",
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    userName: { type: String },
    manager: { type: Number, default: 0 },//是否是管理员，默认0，不是 1 是
    holder: { type: Number, default: 0 },//是否是群主，默认0 不是 1 是
    card: String,//群名片
});

groupUserSchema.statics.findGroupByUserName = function (userName, cb) {
    //根据用户名查找所在群聊
    return this.find({ userName: userName }).populate("groupId").exec(cb);
};

groupUserSchema.statics.findGroupUsersByGroupId = function (groupId, cb) {
    //通过groupId查找群成员
    return this.find({ groupId: groupId }).populate({ push: "userId", select: "signature avatar nickname" }).exec(cb);
};

module.exports = mongoose.model("groupUser", groupUserSchema);


