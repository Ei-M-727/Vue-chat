// 导入 mongoose 模块
const mongoose = require("mongoose");
// 定义一个模式
//使用 Schema 构造器创建一个新的模式实例，使用构造器的对象参数定义各个字段。
const Schema = mongoose.Schema;

//手机号数据模型（用于发送验证码）

const mobilePhoneSchema = new Schema({
    mobilePhone: { type: String, unique: true },//手机号
    clientIp: { type: String, default: "" },//客户端ip
    sendCount: Number,//发送次数
    curDate: String,//当前日期
    sendTimestamp: { type: String, default: +new Date() },//短信发送的时间戳

});

module.exports = mongoose.model("mobilePhone", mobilePhoneSchema);