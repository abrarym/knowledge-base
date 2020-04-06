let datab = require('../util/database');

function addUsers(userInfo) {
    let sql = "Insert into users(firstname, lastname, email, password, passwordconfirm, url, description, country, dateOfBirth) values ('" + userInfo.firstname + "', '"+ userInfo.lastname+ "', '" + userInfo.email + "', '"+ userInfo.password + "', '" + userInfo.passwordconfirm + "', '" + userInfo.url + "', '" + userInfo.description + "', '" + userInfo.occupation + "', '" + userInfo.country + "', '" + userInfo.dateOfBirth + "')";
    
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
    getusers: getSpecificUser 
}