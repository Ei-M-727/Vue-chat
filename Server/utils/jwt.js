const jwt = require("jsonwebtoken");

//密钥
const JWT_SECRET = "chat_jwt";

//创建Token

const createToken = (userInfo) => {
    // JWT格式 token｜ 有效时间1小时
    return jwt.sign(userInfo, JWT_SECRET, { expiresIn: "24h" });
};

//验证token结果（验证secret和检查有效期exp）
const authJwt = async (ctx, next) => {
    const token = ctx.header.authorization || '';
    if (token.startsWith('Bearer')) {
        const tokenStr = token.substring(7);
        try {
            const user = await jwt.verify(tokenStr, JWT_SECRET);
            ctx.state.user = user;

        } catch (error) {
            ctx.throw(401, 'Invalid token');
        }
    } else {
        ctx.throw(401, 'Invalid token');
    }
    await next();
};

module.exports = {
    createToken,
    authJwt,
};