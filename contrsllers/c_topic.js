// 文章控制器，文章相关方法实现
const M_topic = require("../models/m_topic");


// 渲染文章页面
exports.showTopicList = (req, res) => {
    // 视图要用数据
    M_topic.findAllTopics((err, data) => {
        if (err) {
            return res.send({
                code: 500,
                msg: "服务器出错啦 ！!"
            })
        }
        // console.log(data);

        res.render("index.html", {
            topics: data,
            user: req.session.user
        });
        // console.log(req.session.user);

    });

}

// 发布新文章
exports.createTopic = (req, res) => {
    res.render("../views/topic/create.html", {
        user: req.session.user
    });
}

// 处理添加新文章的请求
exports.handleCreateTopic = (req, res) => {
    // 获取表单数据
    const body = req.body;
    // 让M去添加数据到数据库中并返回结果
    M_topic.addTopic(body, (err, data) => {
        if (err) {
            return res.send({
                code: 500,
                msg: "服务器错了！!"
            })
        }
        // 返回200
        res.send({
            code: 200,
            msg: "添加成功"
        })
    })
}