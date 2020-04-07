const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'knowledgebase',
    password: '7S::knowledge'
});

module.exports = pool.promise();
