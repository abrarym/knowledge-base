let datab = require('../util/database');

function addUsers(userInfo) {
    let sql = "INSERT into users(firstname, lastname, email, password, passwordconfirm, url, description, occupation, country, dateOfBirth) values('" + userInfo.firstname + "', '" + userInfo.lastname + "', '" + userInfo.email + "', '" + userInfo.password + "', '" + userInfo.passwordconfirm + "', '" + userInfo.url + "', '" + userInfo.description + "', '" + userInfo.occupation + "', '" + userInfo.country + "', '" + userInfo.dateOfBirth + "')";
    
    datab.execute(sql);
}

function getAllExistingUsers() {
    return datab.execute('SELECT * FROM usersdatastorage.users');
}

function getSpecificUser(id) {
    return datab.execute("SELECT * FROM usersdatastorage.users WHERE email = '" + id + "'");
}

module.exports = {
    add : addUsers,
    getall : getAllExistingUsers,
    getusers: getSpecificUser 
}