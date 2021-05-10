//use node express
const express = require('express')
//use morgan
const morgan = require('morgan')
//use cors for enable api's
const cors = require('cors')

//create object express
const app = express()

//environment variables
app.set('port', process.env.PORT || 4000);

app.use(cors())
app.use(morgan('dev')); 
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//url for consume of Api's
app.use("/api/profiles" , require('./routes/profiles.routes'))


//Export module app
module.exports = app;