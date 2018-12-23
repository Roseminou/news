// 文章相关数据库操作
const connection = require("../config/db_config");

// 提取所有文章
exports.findAllTopics = (callback) => {
    const sqlstr = "SELECT * FROM `topics` ORDER BY id DESC";
    connection.query(sqlstr, (err, data) => {
        if (err) {
            return callback(err);
        }
        callback(null, data);
    })
}

// 添加文章
exports.addTopic = (body, callback) => {
    const sqlstr = "INSERT INTO `topics`SET ?";
    connection.query(sqlstr, body, (err, data) => {
        if (err) {
            return callback(err);
        }
        callback(null, data);
    })
}