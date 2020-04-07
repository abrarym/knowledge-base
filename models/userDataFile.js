let datab = require('../util/database');

function addUser(userInfo) {
    let sql = "Insert into users(firstname, lastname, email, password, picture, description, occupation, country, dateofbirth) values ('" 
    + userInfo.firstname + "', '"
    + userInfo.lastname + "', '" 
    + userInfo.email + "', '"
    + userInfo.password + "', '"
    + userInfo.url + "', '"
    + userInfo.description + "', '"
    + userInfo.occupation + "', '" 
    + userInfo.country + "', '" 
    + userInfo.dateOfBirth + "')";
    
    datab.execute(sql);
}

function getAllExistingUsers() {
    return datab.execute('Select * from users');
}

function getSpecificUser(email) {
    return datab.execute("Select * from users where email = '" + email + "'");
}

module.exports = {
    add : addUser,
    getall : getAllExistingUsers,
    getusers: getSpecificUser,
}