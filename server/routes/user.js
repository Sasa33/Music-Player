var express = require('express');
var router = express.Router();
var home = require('../model/home');
var rank = require('../model/rank');
var search = require('../model/search');

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

//两个接口一个用于获取官方榜，一个用于或许全球榜
router.get('/officialrank', rank.getOfficialRank);
router.get('/nationalrank', rank.getNationalRank);

router.get('/search', search.searchSongs);

module.exports = router;
