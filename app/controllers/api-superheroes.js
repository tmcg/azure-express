
var express = require('express');
var uuidV4 = require('uuid/v4');
var router = express.Router();

var mongoose = require('mongoose');
var SuperHeroes = require('../models/superheroes.schema');

module.exports = function(app) {
  app.use('/api/superheroes', router);
}

var mapDocumentToSuperHero = function(doc) {
  return {
    uid: doc.uid,
    name: doc.name,
    alterEgo: doc.alterEgo,
  }
};

router.get('/', function(req, res, next) {
  /*
  var heroesList = [
    {"uid": "dd3a7f65-18a6-44f4-85e7-6ce3c05ba5be","name": "Aquaman", "alterEgo": "Arthur Curry"},
    {"uid": "54770ebf-387f-43de-9654-d4b21065eaf0","name": "The Flash", "alterEgo": "Barry Allen"},
    {"uid": "6b1a577e-c71a-4e68-a20d-9f2e3f4445fa","name": "Superman", "alterEgo": "Clark Kent"},
    {"uid": "0f0ed508-92d5-41bf-b5ec-14dc4a58d99e","name": "Batman", "alterEgo": "Bruce Wayne"},
    {"uid": "7e6efd53-1ffb-481a-a6f9-3ddcffbc82b9","name": "Wonder Woman", "alterEgo": "Diana Prince"}
  ];
  res.json(heroesList);
  */

  SuperHeroes.find(function(err, heroes) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(heroes.map(mapDocumentToSuperHero));
    }
  });
});

router.post('/', function(req, res, next) {
  var newSuperHero = {
    uid: uuidV4(),
    name: req.body.name,
    alterEgo: req.body.alterEgo
  }
  SuperHeroes.create(newSuperHero);
  res.sendStatus(200);
});

router.get('/:id', function(req, res, next) {
  SuperHeroes.find({ uid: req.params.id }, function(err, heroes) {
    if (err) {
      res.sendStatus(500);
    } else {
      var heroesList = heroes.map(mapDocumentToSuperHero);
      if (heroesList.length === 0) {
        res.sendStatus(404);
      } else {
        res.json(heroesList[0]);
      }
    }
  });
});

router.put('/:id', function(req, res, next) {
  var updateHero = {
    uid: req.params.id,
    name: req.body.name,
    alterEgo: req.body.alterEgo
  }

  SuperHeroes.findOneAndUpdate({ uid: updateHero.uid }, updateHero, {new: true}, function(err, cust) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

router.delete('/:id', function(req, res, next) {
  SuperHeroes.findOneAndRemove({ uid: req.params.id }, function(err, cust) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

