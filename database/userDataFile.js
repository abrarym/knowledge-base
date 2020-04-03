let datab = require('../util/database');

function addUsers(userInfo) {
    let sql = "Insert into users(firstname, lastname, email, password, passwordconfirm) values ('" + userInfo.firstname + "','"+ userInfo.lastname+ "','" + userInfo.email + "','"+ userInfo.password+ "','" + userInfo.passwordconfirm + "','" + "')";
    
    datab.execute(sql);
}

function getAllExistingUsers() {
    return datab.execute('Select * from users');
}

function getSpecificUser(id) {
    return datab.execute("Select * from users where id = " + id);
}

module.exports = {
    add : addUsers,
    getall : getAllExistingUsers,
    getpeople: getSpecificUser 
}