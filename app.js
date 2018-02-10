//const express = require('express');
//const app=express();
const http = require('http');
const fs = require('fs');
const server=http.createServer((req, res) => {
  console.log('request was made'+req.url);
  if(req.url ==='/con'||req.url === '/' )
  {
    res.writeHead(200 ,{'Content-Type':'text/html'});
    fs.createReadStream('./controller/index.html').pipe(res);
  }
});
//const watson=require('./controller/wrapper.js');
//app.get('/con',(req,res) =>{
  //res.render('index');
//});
///app.set('view engine', 'ejs');
//app.use(express.static('./public'));
server.listen(3000);
console.log("you are listening to port 3000");
