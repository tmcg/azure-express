
var os = require('os');
var config = require('../../config/config');

var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var articles = [new Article(), new Article()];
  var dateTime = new Date();

    res.render('index', {
      title: 'Microsoft Azure App Services',
      dateTime: dateTime.toISOString(),
      hostName: os.hostname(),
      appName: config.app.name,
      buildName: 'super hot',
      articles: articles
    });
});
