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

// create a variable that links to the route
let userRoutesFile = require('./routes/usersRoutes');

app.get('', (req, res) => {
  res.render('index', {
    title: 'Where Developers Learn, Share & Refactor',
  });
});

app.use(userRoutesFile);

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

// MATT & BENSON your back-end stuff starts here

// END OF BACK-END STUFF

app.listen(port, () => {
  console.log('server is up on port 3000');
});
