

var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/superheroes', router);
};

router.get('/', function (req, res, next) {
  res.render('superheroes', {});
});
