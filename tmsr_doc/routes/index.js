var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'register' });
});

router.post('/register', function(req, res, next) {
if(req.body['Confirm password']!=req.body['Password'])
{
  req.flash('error','两次输入的口令不一致');
  alert('两次输入的口令不一致');
  //return res.redirect('/register')
}
});

router.get('/bar', function(req, res, next) {
  res.render('bar', { title: 'bar' });
});

router.get('/pie', function(req, res, next) {
  res.render('pie.html', { title: 'Pie' });
});

router.get('/table', function(req, res, next) {
  res.render('table.html', { title: 'table' });
});

router.get('/top', function(req, res, next) {
  res.render('toppage.html', { title: 'toppage' });
});
module.exports = router;
