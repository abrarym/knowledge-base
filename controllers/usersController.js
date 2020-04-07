let userModel = require('../models/userDataFile');
let userInfo = {};
let postInfo = {};
let uniqueInfo = {};

const getAllExistingUsers = (req, res) => {
  const allUsers = userModel.getall();

  allUsers.then(([rows, fieldData]) => {
    res.render('profile', { style: rows, style: true });
  });
};

const getAddUsers = (req, res) => {
  res.render('register', { 
      formCSS: true      
  });
};

const createPost = (req, res) => {
    var datetime = new Date();
    datetime.toISOString().slice(0,10);
    console.log(req.body);
    let date = datetime;
    let likes = 0;
}

exports.postAddUsers = (req, res) => {
    let u_firstname = req.body.firstname;
    let u_lastname = req.body.lastname;
    let u_email = req.body.email;
    let u_password = req.body.password;
    let u_url = req.body.url;
    let u_description = req.body.description;
    let u_occupation = req.body.occupation;
    let u_country = req.body.country;
    let u_dateOfBirth = req.body.dateOfBirth
    
    let c0dingProject = {
        firstname: u_firstname,
        lastname: u_lastname,
        email: u_email,
        password: u_password,
        url: u_url,
        description: u_description,
        occupation: u_occupation,
        country: u_country,
        dateOfBirth: u_dateOfBirth
    }
    
    userModel.add(c0dingProject);
    res.redirect(301, '/usersRoutes');
}

exports.postAddPost = (req, res) => {
    let u_userid = req.body.userid;
    let u_topicid = req.body.topicid;
    let u_subject = req.body.subject;
    let u_content = req.body.content;
    let u_date = req.body.date;
    
    let p0stQuestions = {
        userid : u_userid,
        topicid: u_topicid,
        subject: u_subject,
        content: u_content,
        date : u_date
    }
    
}

exports.post = (req, res) => {
    console.log(req.body);
    userInfo = Object.assign({}, userInfo, req.body);
    res.render('register', {
      title: 'Registration Page',
      data: userInfo
    });
    
};

exports.getRegister = (req, res) => {
    console.log(req.body);
    res.render('register', {
      title: 'Registration Page',
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
}

exports.postRegister = (req, res) => {
    userInfo = Object.assign({}, userInfo, req.body);
    console.log(userInfo);
    userModel.add(userInfo);
    res.render('home', {
      title: 'Home Page',
      data: userInfo,
    });
}

//postHome
exports.postHome = (req, res) => {
    const id = req.body.email;
    const users = userModel.getusers(id);
    
    users.then(([data, metadeta]) => {
        userInfo = data[0];
        console.log(userInfo);
        res.render('home', { 
            data: data[0], 
            style: true,
            isHome: true,
            isProfile: false
        });
    });
}

// Same as getHome
exports.goHome = (req, res) => {
    const idPosts = userInfo.iduser;
    const posts = userModel.getposts(idPosts);
    
    posts.then(([data, metadeat]) => {
            res.render('home', {
            discussion: postInfo,
            data: userInfo,
            style: true,
            isHome: true,
            isProfile: false
        });  
    })
}

exports.getProfile = (req, res) => {
    res.render('profile', {
        title: "Profile page",
        data: userInfo,
        isProfile: true,
        isHome: false
    });
}

exports.getMessage = (req, res) => {
    res.render('message', {
      title: 'Message Page',
        data: userInfo
    });
}

exports.postMessage = (req, res) => {
    res.render('message', {
      title: 'Message Page',
        data: userInfo
    });
}

exports.postPosting = (req, res) => {
    
    postInfo.userid = userInfo.iduser;
    var datetime = new Date().toDateString();
    req.body.date = datetime;
    req.body.likes = 0;
    postInfo = Object.assign({}, postInfo, req.body);
    
    console.log(postInfo);
    
    userModel.addpost(postInfo);
    res.render('postings', {
        title: 'Posting page',
        discussion: postInfo,
        data: userInfo
        
    })
}

exports.getInbox = (req, res) => {
    res.render('inbox', {
      title: 'Inbox Page',
        data: userInfo
    });
}
