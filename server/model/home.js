var Personalized = require('../schemas/personalized');
var NewSongs = require('../schemas/newSongs');
var MV = require('../schemas/mv');
var DJProgram = require('../schemas/djProgram');
var Privatecontent = require('../schemas/privateContent');

exports.getPersonalized = (req, res, next) => {
  Personalized.find({}, function (err, result) {
    res.send(result);
  })
};

exports.getNewSongs = (req, res, next) => {
  NewSongs.find({}, function (err, result) {
    res.send(result);
  })
};

exports.getMV = (req, res, next) => {
  MV.find({}, function (err, result) {
    res.send(result);
  })
};

exports.getDJProgram = (req, res, next) => {
  DJProgram.find({}, function (err, result) {
    res.send(result);
  })
};

exports.getPrivatecontent = (req, res, next) => {
  Privatecontent.find({}, function (err, result) {
    res.send(result);
  })
};