const fs = require('fs');
const express = require('express');
const app = express();
const port = 8976;

app.post('/log', (req, res) => {
  console.log('req from app', req)
  res.write("Hi");
  res.end();
});

app.listen(port, () => {
  console.log(`Middleware is running on port: ${port}:`);
})
