const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'usersDataStorage',
    password: 'COMP-4711'
});

module.exports = pool.promise();