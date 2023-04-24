//1 REQUIRE PACKAGES
const express = require('express');
const morgan = require('morgan');
const globalErrHandler = require('./utils/errHandler.js');
const bodyParser = require('body-parser');
const cors = require('cors');
var Sequelize = require("sequelize");
var session = require("express-session");
var connect = require('connect');
var cookieParser= require('cookie-parser');

// initalize sequelize with session store
const app = express();

//2 REQUIRE ROUTES (WHICH WE DO NOT HAVE YET)
const userRoute = require('./routes/userRoutes');
const LoginRoute = require('./routes/loginRoutes');
const DestinationRoute =require('./routes/destination.route');
const currentLocation = require('./models/curentlocation.Model');


//3 APP.USE MIDDLEWARE
app.use(globalErrHandler);

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(cors());
app.options('*',cors());
app.use(morgan('dev'));
app.use(connect());
app.use(cookieParser());




app.use(session({ 
	
    secret: 'thisismysecretkey12s5fjdfkf45d',
    resave: false,
    saveUninitialized: true,
    
}));


//4 CREATE API URL
app.use('/api/user', userRoute);
app.use('/api/login', LoginRoute);
app.use('/api/destination',DestinationRoute);
app.use('api/currentloaction',currentLocation);





module.exports = app;
