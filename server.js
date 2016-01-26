//var http = require('http');
var multer = require('multer');
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })
var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

// view engine setup
app.set('views', __dirname + '/');
app.set('view engine', 'jade');  
 
 
app.get('/', function(req, res){
  res.render('index');
}); 

app.post('/filesize', upload.single('upl'), function (req, res, next) {
  var data = {
      file_size: req.file.size + ' bytes'
  }
  res.send(JSON.stringify(data));
  res.status(204).end();
})

app.listen( port, function(){ console.log('listening on port '+port); } ); 