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

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

// MATT & BENSON your back-end stuff starts here
app.get('', (req, res) => {
  res.render('index', {
    title: 'Knowledge Base',
  });
});

// END OF BACK-END STUFF

app.listen(port, () => {
  console.log('server is up on port 3000');
});
