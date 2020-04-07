const userModel = require('../models/userDataFile');

let userInfo = {};
let postInfo = {};
let allUserPosts = {};
const numberOfPost = {};

const getAllExistingUsers = (req, res) => {
  const allUsers = userModel.getall();

  allUsers.then(([
    rows,
    fieldData
  ]) => {
    res.render('profile', { style: rows, style: true });
  });
};

const getAddUsers = (req, res) => {
  res.render('register', {
    formCSS: true,
  });
};

const createPost = (req, res) => {
  const datetime = new Date();

  datetime.toISOString().slice(0, 10);
  console.log(req.body);
  const date = datetime;
  const likes = 0;
};

exports.postAddUsers = (req, res) => {
  const u_firstname = req.body.firstname;
  const u_lastname = req.body.lastname;
  const u_email = req.body.email;
  const u_password = req.body.password;
  const u_url = req.body.url;
  const u_description = req.body.description;
  const u_occupation = req.body.occupation;
  const u_country = req.body.country;
  const u_dateOfBirth = req.body.dateOfBirth;

  const c0dingProject = {
    firstname: u_firstname,
    lastname: u_lastname,
    email: u_email,
    password: u_password,
    url: u_url,
    description: u_description,
    occupation: u_occupation,
    country: u_country,
    dateOfBirth: u_dateOfBirth,
  };

  userModel.add(c0dingProject);
  res.redirect(301, '/usersRoutes');
};

exports.postAddPost = (req, res) => {
  const u_userid = req.body.userid;
  const u_topicid = req.body.topicid;
  const u_subject = req.body.subject;
  const u_content = req.body.content;
  const u_date = req.body.date;

  const p0stQuestions = {
    userid: u_userid,
    topicid: u_topicid,
    subject: u_subject,
    content: u_content,
    date: u_date,
  };
};

exports.post = (req, res) => {
  console.log(req.body);
  userInfo = Object.assign({}, userInfo, req.body);
  res.render('register', {
    title: 'Registration Page',
    data: userInfo,
  });
};

exports.getRegister = (req, res) => {
  console.log(req.body);
  res.render('register', {
    title: 'Registration Page',
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });
};

exports.postRegister = (req, res) => {
  userInfo = Object.assign({}, userInfo, req.body);
  console.log(userInfo);
  userModel.add(userInfo);
  res.render('home', {
    title: 'Home Page',
    data: userInfo,
  });
};

// postHome
exports.postHome = (req, res) => {
  const id = req.body.email;
  const users = userModel.getnumpostmessages(id);

  users.then(([
    data,
    metadeta
  ]) => {
    userInfo = data[0];
    console.log(userInfo);
    const posts = userModel.getallpostsuser(userInfo.iduser);

    posts.then((data, metadeta) => {
      allUserPosts = data[0];
      //            for(let i = 0; i < allUserPosts.length; i++) {
      //                console.log(allUserPosts[i]);
      //            }
      console.log(allUserPosts);
      res.render('home', {
        posts: allUserPosts,
        data: userInfo,
        style: true,
        isHome: true,
        isProfile: false,
      });
    });
  });
};

// Same as getHome
exports.goHome = (req, res) => {
  const idPosts = userInfo.iduser;
  const posts = userModel.getallpostsuser(idPosts);

  posts.then(([
    data,
    metadeat
  ]) => {
    res.render('home', {
      discussion: postInfo,
      data: userInfo,
      style: true,
      isHome: true,
      isProfile: false,
    });
  });
};

exports.getProfile = (req, res) => {
  res.render('profile', {
    title: 'Profile page',
    discussion: postInfo,
    data: userInfo,
    isProfile: true,
    isHome: false,
    profileCSS: true,
  });
};

exports.getMessage = (req, res) => {
  res.render('message', {
    title: 'Message Page',
    data: userInfo,
  });
};

exports.postMessage = (req, res) => {
  res.render('message', {
    title: 'Message Page',
    discussion: postInfo,
    data: userInfo,
  });
};

exports.postPosting = (req, res) => {
  postInfo.userid = userInfo.iduser;
  const datetime = new Date().toDateString();

  req.body.date = datetime;
  postInfo = Object.assign({}, postInfo, req.body);

  console.log(postInfo);

  userModel.addpost(postInfo);
  userInfo.postcount++;

  res.redirect('/home');
};

exports.replyPosting = (req, res) => {};

exports.getInbox = (req, res) => {
  res.render('inbox', {
    title: 'Inbox Page',
    data: userInfo,
    discussion: postInfo,
  });
};
