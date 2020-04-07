const path = require('path');
const express = require('express');
const expressHbs = require('express-handlebars');
const bodyParser = require('body-parser');
const db = require('./util/database.js');
const dataFile = require('./models/userDataFile.js');

const app = express();
const port = process.env.PORT || 3000;

const urlencodedParser = bodyParser.urlencoded({ extended: false });
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
const userRoutesFile = require('./routes/usersRoutes');

app.get('', (req, res) => {
  res.render('index', {
    title: 'Where Developers Learn, Share & Refactor',
  });
});

app.use(userRoutesFile);

app.post('', urlencodedParser, (req, res) => {
  userInfo = Object.assign({}, userInfo, req.body);
  console.log(userInfo);
  res.render('register', {
    title: 'Registration page',
    data: req.body,
  });
});

app.get('/register', urlencodedParser, (req, res) => {
  console.log(req.body);
  res.render('register', {
    title: 'Registration Page',
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });
});

app.post('/register', urlencodedParser, (req, res) => {
  userInfo = Object.assign({}, userInfo, req.body);
  console.log(userInfo);
  dataFile.add(userInfo);
  res.render('home', {
    title: 'Home Page',
    data: userInfo,
  });
});

app.get('/home', urlencodedParser, (req, res) => {
  console.log(req.body);
  res.render('home', {
    title: 'Home Page',
  });
});

app.get('/profile', (req, res) => {
  res.render('profile', {
    title: 'Profile Page',
  });
});

app.get('/message', (req, res) => {
  res.render('message', {
    title: 'Message Page',
  });
});

app.get('/inbox', (req, res) => {
  res.render('inbox', {
    title: 'Inbox Page',
  });
});

app.listen(port, () => {
  console.log('server is up on port 3000');
});
