const express = require('express')

const server = express();

const port = 4000;

const logger = (req , res , next )=>{
    console.table({
        method : req.method ,
        url : req.url
    })
    next() ;
}

server.use(logger) ;

server.get("/" ,  (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
}) ;

server.get("/contactus" ,  (req, res) => {
    res.sendFile(__dirname + '/public/Contactus.html')
}) ;

server.get("/OurServices" , (req, res) => {
    res.sendFile(__dirname + '/public/OurServices.html')
}) ;

server.get("/css/style.css" , (req, res) => {
    res.sendFile(__dirname + '/public/css/style.css')
}) ;


server.listen(port, (err) => err ? console.log(err) :
    console.log(`server started on port ${port}`)); 