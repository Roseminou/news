// 用户相关
const M_user = require("../models/m_user");




// 渲染登录页面
exports.showSignin = (req, res) => {
    res.render("signin.html");
};

// 处理登录请求
exports.handleSignin = (req, res) => {
    // 获取表单的数据
    const body = req.body;
    // console.log(body);
    // 先验证邮箱
    M_user.checkEmail(body.email, (err, data) => {
        if (err) {
            throw err;
        };
        // 如果邮箱没有数据， data = []
        if (data.length === 0) {
            res.send({
                code: 1,
                msg: "邮箱不存在"
            });
        }
        // console.log(data[0].password !== body.password);

        // 验证邮箱对应数据的密码是否正确
        if (data[0].password !== body.password) {
            res.send({
                code: 2,
                msg: "密码错误"
            })
        }
        // 可以获取到正确的用户信息
        // 使用session把data[0].nickname进行保存，在服务器段进行保存
        req.session.user = data[0];
        console.log(req.session.user);

        // 返回200状态吗
        res.send({
            code: 200,
            msg: "可以登录啦!!"
        })
    });
    // 查询数据库

};