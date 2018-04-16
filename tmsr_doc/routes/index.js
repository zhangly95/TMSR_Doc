var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/bar', function(req, res, next) {
  res.render('bar', { title: 'bar' });
});

router.get('/pie', function(req, res, next) {
  res.render('pie.html', { title: 'Pie' });
});
module.exports = router;
