const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();
const port = process.env.Port || 3000;
const siteName = 'Wente Test';

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static('./'));

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`

  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if(err) {
      console.log('Unable to append to server log.');
    }
  });
  next();
});

// Use when in maintenance mode (i.e., site is down)
// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('getSiteName', () => {
  return siteName;
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home',
    siteName: siteName
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Us',
    siteName: siteName
  });
});

app.get('/sires', (req, res) => {
  res.render('sires.hbs', {
    pageTitle: 'Sires',
    siteName: siteName
  });
});

app.get('/females', (req, res) => {
  res.render('females.hbs', {
    pageTitle: 'Females',
    siteName: siteName
  });
});

app.get('/sires', (req, res) => {
  res.render('sires.hbs', {
    pageTitle: 'Sires',
    siteName: siteName
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
