const express = require('express');
const hbs = require('hbs');
const path = require('path');
const port = 3200;
const cookieParser = require("cookie-parser");
const app = express();
const bodyParser = require('body-parser');  
// Parsing middleware
// app.use(express.json()); // New
app.use(cookieParser());
app.use(express.urlencoded({ extended : false}))
app.use(express.json())
// Static file Public folder
const registerpath =path.join(__dirname,"./public");
app.use(express.static(registerpath));
// hbs view engine and html files in hbs file
app.set('view engine','hbs');
// Pages File
app.use('/',require('./route/router'))
// Port Number Listening
app.listen(port,()=>{
    console.log('Server is listening Port : ' +`${port}`);
})