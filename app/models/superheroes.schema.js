
var mongoose = require("mongoose");

var superheroesSchema = new mongoose.Schema({
    uid: String,
    name: String,
    alterEgo: String,
});

module.exports = mongoose.model('superheroes', superheroesSchema);
