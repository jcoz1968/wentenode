const express = require('express');

var fs = require('fs');
var datafile = 'data/data.json';
var router = express.Router();

// GET api/data
router.route('/api/data').get((req, res) => {
  var data = getData();
  res.status(200).send(data);
});

function getData() {
  var data = fs.readFileSync(datafile, 'utf8');
  return JSON.parse(data);
}

module.exports = router;
