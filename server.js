//content of index.js
//var http = require('http')
//var host = "127.0.0.1";
//var port = 3000

//const requestHandler = (request, response) => {  
//  console.log(request.url)
////  response.end('Hello Node.js Server!')
//}
//const server = http.createServer(requestHandler)
//server.listen(port, (err) => {  
//  if (err) {
//    return console.log('something bad happened', err)
//  }
//  console.log(`server is listening on ${port}`)
//})

//var path = require('path')  
//var express = require('express')  
//var exphbs = require('express-handlebars')
//var app = express()
//
//app.use(express.static(__dirname + 'app'));
//    
//app.engine('.html', exphbs({  
//  defaultLayout: 'main',
//  extname: '.html',
//  layoutsDir: path.join(__dirname, 'views/layouts')
//}))
//app.set('view engine', '.html')  
//app.set('views', path.join(__dirname, 'views'))
//
//app.listen(port, host);
//app.get('/', (request, response) => {  
//  response.render('home', {
//    name: 'John'
//  })
//})

var express = require('express');
var app = express();

app.get('/', function(req, res) {
res.sendFile(__dirname + '/index.html');});

app.use(express.static(__dirname + '/app'));
app.listen(3000);