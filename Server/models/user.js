//导入mongoose模块
const mongoose = require("mongoose");
//定义模式
//使用 Schema 构造器创建一个新的模式实例，使用构造器的对象参数定义各个字段。
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");//用于密码哈希的加密算法
const SALT_WORK_FACTOR = 10;//定义加密密码计算强度
//用户数据模型
const userSchema = new Schema({
    //Schema
    userName: { type: String, unique: true },//名称
    password: String,//密码
    mobilePhone: { type: String, unique: true },//手机号
    avatar: { type: String, default: "/Server/public/images/avatar.jpg" },//默认头像
    signature: { type: String, default: "这个人没有签名。" },
    nickName: { type: String, default: +new Date() },
    email: { type: String, default: "" },
    province: { type: String, default: "广东省" },//省
    city: { type: String, default: "广州市" },//市
    gender: { type: String, default: "男" },//0 男 1 女 3 保密
    signUpTime: { type: Date, defaule: +new Date() },//注册时间
    lastLoginTime: { type: Date, default: +new Date() },//最后一次登录
    conversationsList: Array,//会话列表*name 会话名称*photo 会话头像*id 会话id * type 会话类型group/frend/me
    emoji: Array,//表情包
    age: { type: Number, default: 18 },
    friendsGroup: {
        type: Object,
        default: { name: "我的好友" }
    },
});

//对密码进行加密
//使用pre中间件在用户存储信息前执行
userSchema.pre("save", function (next) {
    //产生密码hash当密码有更改的时候（或者是新密码）

    //进行加密｜产生一个salt
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) return next(err);//使用早期return模式可以在调用next()时阻止其余的中间件功能运行
        //结合salt产生新的hash
        //传递一个数字作为第二个参数，这个数字越大，哈希值就越安全。
        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) return next(err);
            //使用hash覆盖明文密码
            this.password = hash;
            next();
        });
    });
});

//密码比对的方法
//第一个参数：客户端传递的；第二个参数：数据库的

userSchema.methods.comparePassword = (_password, password) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(_password, password, (error, result) => {
            !error ? resolve(result) : reject(error);
        });
    });
};


//发布模型
module.exports = mongoose.model("user", userSchema);