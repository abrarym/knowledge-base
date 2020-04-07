let userModel = require('../models/userDataFile');
let userInfo = {};

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

exports.postAddUsers = (req, res) => {
    let u_firstname = req.body.firstname;
    let u_lastname = req.body.lastname;
    let u_email = req.body.email;
    let u_password = req.body.password;
    let u_passwordconfirm = req.body.passwordconfirm;
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
        passwordconfirm: u_passwordconfirm,
        url: u_url,
        description: u_description,
        occupation: u_occupation,
        country: u_country,
        dateOfBirth: u_dateOfBirth
    }
    
    userModel.add(c0dingProject);
    res.redirect(301, '/usersRoutes');
}

exports.post = (req, res) => {
    console.log(req.body.loginButton);
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

exports.getHome = (req, res) => {
    const id = req.body.email;
    const users = userModel.getusers(id);
    users.then(([data, metadeta]) => {
        userInfo = data[0];
        res.render('home', { 
            data: data[0], 
            style: true,
            isHome: true,
            isProfile: false
        });
    });
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

exports.getInbox = (req, res) => {
    res.render('inbox', {
      title: 'Inbox Page',
        data: userInfo
    });
}
