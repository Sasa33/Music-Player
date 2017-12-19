var Personalized = require('../schemas/personalized');
var NewSongs = require('../schemas/newSongs');
var MV = require('../schemas/mv');
var DJProgram = require('../schemas/djProgram');
var Privatecontent = require('../schemas/privateContent');
var PlayList = require('../schemas/playList');

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

exports.getPlayList = (req, res, next) => {
  PlayList.find({}, function (err, result) {
    res.send(result);
  })
};