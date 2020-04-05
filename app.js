const path = require('path');
const express = require('express');
const expressHbs = require('express-handlebars');

const app = express();
const port = process.env.PORT || 3000;

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

app.get('', (req, res) => {
  res.render('index', {
    title: 'Where Developers Learn, Share & Refactor',
  });
});

app.get('/register', (req, res) => {
  res.render('register', {
    title: 'Registration Page',
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

app.listen(port, () => {
  console.log('server is up on port 3000');
});
