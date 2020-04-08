const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'b8afeaa1472c8c',
    database: 'heroku_38b949a65d7a24b',
    password: '263ecc04'
});

//
//const poolMessages = mysql.createPool({
//    host: 'localhost',
//    user: 'root',
//    database: 'messagesStorage',
//    password: 'COMP-4711'
//});

module.exports = pool.promise();

