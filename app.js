const express = require('express');
const app = express();
const port = 9000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const title = 'header';;
    res.render('partials/header', { title});
  });


app.get('/home', (req, res) => {
  const title = 'Home Page';
  const items = ['JavaScript', 'Java', '.Net', 'GO'];
  res.render('pages/home', { title, items });
});

app.get('/about', (req, res) => {
  const title = 'About Us';
  res.render('pages/about', { title });
});


app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
