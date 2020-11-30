const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('Request received !');
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: 'Request received with succeed !' });
  next();
});

app.use((req, res, next) => {
  console.log('Response sent with suceed !');
});

module.exports = app;