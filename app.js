const path = require('path');
const express = require('express');
const expressHbs = require('express-handlebars');
const bodyParser = require('body-parser');
const db = require('./util/database.js');
const dataFile = require('./models/userDataFile.js');
const control = require('./controllers/usersController.js');

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

app.post('', urlencodedParser, function(req, res) {
    userInfo = Object.assign({}, userInfo, req.body);
    var count = Object.keys(userInfo).length;
    
    console.log(userInfo);
    console.log("This is " + dataFile.getusers(userInfo.email));
    console.log(control.getUsers(req, res));
    userInfo = control.getUsers;
    if(count == 2) {
        console.log("You arrived here");
        control.getUsers;
    } else if (count == 5) {
      control.getAddUsers;
    } else {
        res.send("Incorrect number of fields")
        res.redirect('');
    }
});

app.get('/register', (req, res) => {
  res.render('register', {
    title: 'Registration Page',
    data: userInfo
  });
});

app.post('/register', urlencodedParser, function(req, res) {
    userInfo = Object.assign({}, userInfo, req.body);
    
    dataFile.add(userInfo);
    res.render('home', {
        title: 'Home Page',
        data: userInfo
        
    });
});

app.get('/home', urlencodedParser, function(req, res) {
    console.log(req.body);
    if (req.body.email == dataFile.getusers(req.body.email)) {
        res.render('home', {
            title: 'Home Page',
            data: req.body
        
        });
    }
    console.log(req.body);
    
    res.render('home', {
        title: 'Home Page',
    });
});

// MATT & BENSON your back-end stuff starts here
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

// BENSON PUT YOUR CODE UNDER THIS
// app.use(userRoutesFile);

// app.post('', urlencodedParser, (req, res) => {
//   console.log(req.body);
//   res.render('register', {
//     data: 'req.body',
//   });
// });

// app.post('/register', urlencodedParser, (req, res) => {
//   console.log(req.body);
//   res.render('home', {
//     data: 'req.body',
//   });
// });

app.listen(port, () => {
  console.log('server is up on port 3000');
});
