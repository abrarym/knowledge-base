const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

/* --HandleBar Helpers-- */

// Container For Contents
hbs.registerHelper('container', options => {
  return new hbs.SafeString(
    `<main class="welcome-container">
    ${options.fn(this)}
    </main>`,
  );
});

// Container for Header Login/Registration
hbs.registerHelper('header_login', options => {
  return new hbs.SafeString(
    `<section class="header-image-container">
    <div class="header">
    ${options.fn(this)}
    </div>
    </section>`,
  );
});

// Container for Login Forms
hbs.registerHelper('forms', options => {
  return new hbs.SafeString(
    `<section class="login-container">
    ${options.fn(this)}
    </section>`,
  );
});

/* --END-HandleBar Helpers-- */

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

// MATT & BENSON your back-end stuff starts here
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

// END OF BACK-END STUFF

app.listen(port, () => {
  console.log('server is up on port 3000');
});
