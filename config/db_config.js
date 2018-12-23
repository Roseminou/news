// 1. 导包
var mysql = require('mysql');
// 2. 配置
var connection = mysql.createConnection({
    // 主机
    host: 'localhost',
    // 用户名
    user: 'root',
    // 密码
    password: 'root',
    // 数据库名字
    database: 'msg'
});

// 3. 开启连接
connection.connect();

module.exports = connection;