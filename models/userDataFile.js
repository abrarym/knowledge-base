let datab = require('../util/database');

function addUser(userInfo) {
    let sql = "INSERT into users(firstname, lastname, email, password, picture, description, occupation, country, dateofbirth) values('" 
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

function addPosts(postId) {
    let sql = "INSERT into post(userid, subject, content, topicid, date, likes) values('"
    + postId.userid + "', '"
    + postId.subject + "', '"
    + postId.content + "', '"
    + postId.topicid + "', '"
    + postId.date + "', '"
    + postId.likes + " ')";
    
    datab.execute(sql);
}

function getAllExistingUsers() {
    return datab.execute('SELECT * FROM knowledgebase.users');
}

function getAllExistingPosts() {
    return datab.execute('SELECT * FROM knowledgebase.post');
}

function getSpecificUser(id) {
    return datab.execute("SELECT * FROM knowledgebase.users WHERE email = '" + id + "'");
}

function getSpecificPost(id) {
    return datab.execute("SELECT * FROM knowledgebase.post WHERE userid = '" + id + "'");
}

module.exports = {
    add : addUser,
    getall : getAllExistingUsers,
    getusers: getSpecificUser,
    addpost : addPosts,
    getallposts : getAllExistingPosts,
    getposts : getSpecificPost
}