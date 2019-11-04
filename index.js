const express = require('express');
const robot = require('robotjs');

const app = express();

app.use(express.static('public'));

app.get('/toggle', (req, res) => {
  robot.keyTap('space');
  res.send('good');
});

app.listen(8080, () => {
  console.log('Started Watson Remote');
});
