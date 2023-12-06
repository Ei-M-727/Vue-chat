

const tokenCheck = function () {
    return async function (ctx, next) {
        if (ctx.state.user) {
            //如果携带有效Token就对Token进行检查（由kow-jwt检查Token有效性）
            let result = true;
            //check here
            if (result) {
                await next();
            } else {
                ctx.body = {
                    msg: "Token 检查未通过"
                };
            }
        } else {
            //如果没有携带Token 就跳过检查
            await next();
        }
    };
};

module.exports = tokenCheck;