const userModel = require('../models/userDataFile');

let userInfo = {};

exports.getAllExistingUsers = (req, res, next) => {
  const allUsers = userModel.getall();

  allUsers.then(([
    rows,
    fieldData
  ]) => {
    res.render('profile', { style: rows, style: true });
  });
};

exports.getAddUsers = (req, res, next) => {
  res.render('register', { formCSS: true });
};

exports.getUsers = (req, res, next) => {
  const { id } = req.params;
  const users = userModel.getUsers(id);

  users.then(([
    data,
    metadeta
  ]) => {
    res.render('home', { home: data[0], style: true });
  });
};

exports.post = (req, res) => {
    userInfo = Object.assign({}, userInfo, req.body);
    console.log(userInfo);
    res.render('register', {
      title: 'Registration page',
      data: req.body,
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

exports.getHome = (req, res) => {
    console.log(req.body);
    res.render('home', {
      title: 'Home Page',
    });
}

exports.getProfile = (req, res) => {
    res.render('profile', {
      title: 'Profile Page',
    });
}

exports.getMessage = (req, res) => {
    res.render('message', {
      title: 'Message Page',
    });
}

exports.getInbox = (req, res) => {
    res.render('inbox', {
      title: 'Inbox Page',
    });
}

exports.postAddUsers = (req, res, next) => {
  const u_firstname = req.body.firstname;
  const u_lastname = req.body.lastname;
  const u_email = req.body.email;
  const u_password = req.body.password;
  const u_passwordconfirm = req.body.passwordconfirm;
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
    passwordconfirm: u_passwordconfirm,
    url: u_url,
    description: u_description,
    occupation: u_occupation,
    country: u_country,
    dateOfBirth: u_dateOfBirth,
  };

  userModel.add(c0dingProject);
  res.redirect(301, '/usersRoutes');
};
//= ======
// const userModel = require('../models/userDataFile');
//
// exports.getAllExistingUsers = (req, res, next) => {
//  const allUsers = userModel.getall();
//
//  allUsers.then(([
//    rows,
//    fieldData
//  ]) => {
//    res.render('users', { style: rows, style: true });
//  });
// };
//
// exports.getAddUsers = (req, res, next) => {
//  res.render('register', { formCSS: true });
// };
//
// exports.getUsers = (req, res, next) => {
//  const { id } = req.params;
//  const users = userModel.getUsers(id);
//
//  users.then(([
//    data,
//    metadeta
//  ]) => {
//    res.render('home', { home: data[0], style: true });
//  });
// };
//
// exports.postAddUsers = (req, res, next) => {
//  const u_firstname = req.body.firstname;
//  const u_lastname = req.body.lastname;
//  const u_email = req.body.email;
//  const u_password = req.body.password;
//  const u_passwordconfirm = req.body.passwordconfirm;
//
//  const c0dingProject = {
//    firstname: u_firstname,
//    lastname: u_lastname,
//    email: u_email,
//    password: u_password,
//    passwordconfirm: u_passwordconfirm,
//  };
//
//  userModel.add(c0dingProject);
//  res.redirect(301, '/usersRoutes');
// };
