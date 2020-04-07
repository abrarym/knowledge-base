const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'knowledgebase',
    password: 'COMP-4711'
});

//
//const poolMessages = mysql.createPool({
//    host: 'localhost',
//    user: 'root',
//    database: 'messagesStorage',
//    password: 'COMP-4711'
//});

module.exports = pool.promise();

