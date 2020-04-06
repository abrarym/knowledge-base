const path = require('path');
const express = require('express');
const expressHbs = require('express-handlebars');
var bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false});
var urlencodedParser2 = bodyParser.urlencoded({ extended: false});

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
    title: 'Where Developers Learn, Share & Refactor',
  });
});

app.use(userRoutesFile);

app.post('', urlencodedParser, function(req, res){
    console.log(req.body);
    res.render('register', {
        data: 'req.body',
    });
});

app.get('/register', (req, res) => {
  res.render('register', {
    title: 'Registration Page',
  });
});


app.post('/register', urlencodedParser, function(req, res) {
    console.log(req.body);
    res.render('home', {
        data: 'req.body',
    });
});

app.get('/home', (req, res) => {
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

app.get('/message', (req, res) => {
  res.render('message', {
    title: 'Message Page',
  });
});

app.listen(port, () => {
  console.log('server is up on port 3000');
});
