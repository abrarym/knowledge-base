const path = require('path');
const express = require('express');
const expressHbs = require('express-handlebars');
var bodyParser = require('body-parser');
let db = require('./util/database.js');
let dataFile = require('./models/userDataFile.js');

const app = express();
const port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false});
let userInfo = {};

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, 'public');

app.engine(
  'hbs',
  expressHbs({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main',
    extname: 'hbs',
  }),
);

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', 'views');

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

// create a variable that links to the route
let userRoutesFile = require('./routes/usersRoutes');

app.get('', (req, res) => {
  res.render('index', {
    title: 'Where Developers Learn, Share & Refactor'
  });
});

app.use(userRoutesFile);

app.post('', urlencodedParser, function(req, res){
    userInfo = Object.assign({}, userInfo, req.body);
    console.log(userInfo);
    res.render('register', {
        title: 'Registration page',
        data: req.body
    });
});

app.get('/register', urlencodedParser,function(req, res) {
    console.log(req.body);
  res.render('register', {
    title: 'Registration Page',
      firstname: req.body.firstname,
        lastname: req.body.lastname
  });
});

app.post('/register', urlencodedParser, function(req, res) {
    userInfo = Object.assign({}, userInfo, req.body);
    console.log(userInfo);
    
    dataFile.add(userInfo);
    res.render('home', {
        title: 'Home Page',
        data: userInfo
        
    });
});

app.get('/home', urlencodedParser, function(req, res){
    console.log(req.body);
  res.render('home', {
    title: 'Home Page',
  });
});

//<<<<<<< HEAD

// MATT & BENSON your back-end stuff starts here
//=======
app.get('/profile', (req, res) => {
  res.render('profile', {
    title: 'Profile Page',
  });
});
//>>>>>>> 0b20d14a06fc643401675c4b19ae0df6bbcad1a3

app.get('/message', (req, res) => {
  res.render('message', {
    title: 'Message Page',
  });
});

app.listen(port, () => {
  console.log('server is up on port 3000');
});
