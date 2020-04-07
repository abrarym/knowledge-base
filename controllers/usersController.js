let userModel = require('../models/userDataFile');

exports.getAllExistingUsers = (req, res, next) => {
    let allUsers = userModel.getall();
    
    allUsers.then(([rows, fieldData]) => {
       res.render('profile', {style: rows, style: true}); 
    });
}

exports.getAddUsers = (req, res, next) => {
    res.render('register', {formCSS: true});
};

exports.getUsers = (req, res, next) => {
    let id = req.params.id;
    let users = userModel.getUsers(id);
    users.then( ([data, metadeta]) => {
        res.render('home', {home: data[0], style: true});
    });
}

exports.postAddUsers = (req, res, next) => {
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