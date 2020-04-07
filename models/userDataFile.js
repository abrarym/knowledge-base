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
    let sql = "INSERT into post(userid, subject, content, topicid, date) values('"
    + postId.userid + "', '"
    + postId.subject + "', '"
    + postId.content + "', '"
    + postId.topicid + "', '"
    + postId.date + " ')";
    
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
    return datab.execute("SELECT * FROM knowledgebase.post WHERE userid = " + id);
}

function getNumOfPostForUser(id) {
    return datab.execute("SELECT u.*, count(distinct p.idpost) as postcount FROM users AS u LEFT JOIN post AS p ON u.iduser = p.userid WHERE u.email = '" + id + "'");
}

function getAllPostsForUser(id) {
    return datab.execute("SELECT post.*, users.picture, count(distinct reply.idreply) AS replycount FROM knowledgebase.users LEFT JOIN knowledgebase.post ON post.userid = users.iduser LEFT JOIN knowledgebase.reply ON reply.postid = post.idpost WHERE post.userid = " + id);
}

function getNumOfMessages(id) {
    return datab.execute("SELECT u.*, count(distinct p.idpost) AS postcount, count(distinct m.idmessage) AS messagecount  FROM users AS u LEFT JOIN post AS p ON u.iduser = p.userid LEFT JOIN message AS m ON u.iduser = m.senderid WHERE u.email = '" + id + "'");

}

function getNumOfReplies(id) {
    return datab.execute("SELECT count(idreply) AS replycount FROM reply WHERE userid = " + id);
}

module.exports = {
    add : addUser,
    getall : getAllExistingUsers,
    getusers: getSpecificUser,
    addpost : addPosts,
    getallposts : getAllExistingPosts,
    getposts : getSpecificPost,
    getnumposts: getNumOfPostForUser,
    getallpostsuser: getAllPostsForUser,
    getnumpostmessages: getNumOfMessages,
    getnumreplies: getNumOfReplies
}