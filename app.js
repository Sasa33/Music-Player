var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); 
var DB_URL = 'mongodb://localhost:27017/myapp';

var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');
//
// var file = "./mongoDB/songs.json";
// var songs = JSON.parse(fs.readFileSync(file));
//
// var file2 = "./mongoDB/mv.json";
// var mv = JSON.parse(fs.readFileSync(file2));
//
// var file3 = "./mongoDB/djprogram.json";
// var djprogram = JSON.parse(fs.readFileSync(file3));
//
// var file4 = "./mongoDB/personal.json";
// var personal = JSON.parse(fs.readFileSync(file4));
//
// var file5 = "./mongoDB/privateContent.json";
// var privateContent = JSON.parse(fs.readFileSync(file5));
//
// var file6 = "./mongoDB/playlists.json";
// var playLists = JSON.parse(fs.readFileSync(file6));

mongoose.connect(DB_URL, {useMongoClient: true});
mongoose.connection.on('connected', function() {
  console.log('connection sucess ' + DB_URL);
}); 

mongoose.connection.on('error', function(err) {
  console.log('connection error ' + err);
}); 

mongoose.connection.on('disconnected', function() {
  console.log('disconnected');
});

// MongoClient.connect(DB_URL, function (err, db) {
//   db.collection('Songs').insert(songs);
//   db.collection('MV').insert(mv);
//   db.collection('djprogram').insert(djprogram);
//   db.collection('personalized').insert(personal);
//   db.collection('privatecontent').insert(privateContent);
//   db.collection('PlayList').insert(playLists);
// });



var user = require('./server/routes/user');

var app = express();

if (process.env.NODE_ENV !== 'production') {
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.js');
  var webpackCompiled = webpack(webpackConfig);
  var webpackDevMiddleware = require('webpack-dev-middleware');
  app.use(webpackDevMiddleware(webpackCompiled, {
    publicPath:webpackConfig.output.publicPath,
    stats: {colors: true},
    lazy: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    },
  }));

  // config hot reloading
  var webpackHotMiddleware = require('webpack-hot-middleware');
  app.use(webpackHotMiddleware(webpackCompiled));
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// allow cross domain access
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use('/api', user);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
