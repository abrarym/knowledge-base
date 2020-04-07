const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'usersDataStorage',
    password: 'COMP-4711'
});

//const poolDiscussion = mysql.createPool({
//    host: 'localhost',
//    user: 'root',
//    database: 'discussionStorage',
//    password: 'COMP-4711'
//});
//
//const poolMessages = mysql.createPool({
//    host: 'localhost',
//    user: 'root',
//    database: 'messagesStorage',
//    password: 'COMP-4711'
//});

module.exports = pool.promise();
//module.exports = poolDiscussion.promise();
