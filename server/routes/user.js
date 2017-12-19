var express = require('express');
var router = express.Router();
var home = require('../model/home');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/personalized', home.getPersonalized);
router.get('/newsongs', home.getNewSongs);
router.get('/mv', home.getMV);
router.get('/djprogram', home.getDJProgram);
router.get('/privatecontent', home.getPrivatecontent);
router.get('/playlist', home.getPlayList);

module.exports = router;
