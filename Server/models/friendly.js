//导入mongoose模块
const mongoose = require("mongoose");

//定义一个模式
//使用 Schema 构造器创建一个新的模式实例，使用构造器的对象参数定义各个字段。
const Schema = mongoose.Schema;

const friendlySchema = new Schema({
    self: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    roomId: {
        type: String,
        default: ""
    },
    createDate: { type: Date, default: Date.now() }
});

friendlySchema.statics.findFriendBySelf = function (userId, cb) {
    // 联表查询 select:关联表的部分属性
    return this.find({ self: userId })
        .populate({ path: "other", select: "signature avatar nickname" })
        .exec(cb);
};

friendlySchema.statics.findFriendByOther = function (userId, cb) {
    return this.find({ other: userId })
        .populate({ path: "self", select: "signature avatar nickname" })
        .exec(cb);
};

module.exports = mongoose.model("friendly", friendlySchema);