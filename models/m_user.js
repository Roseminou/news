// 作用：专门处理数据库操作的代码并且把查询结果返回

// 数据库操作的结果err data
const connection = require("../config/db_config");

// 查询邮箱
exports.checkEmail = (email, callback) => {
    const sqlStr = "SELECT *FROM `users` WHERE email=?";
    connection.query(sqlStr, email, (err, data) => {
        // 在有异步操作有结果的位置，通过调函数的方式传递结果
        if (err) {
            return callback(err);
        }
        callback(null, data);
    });
}