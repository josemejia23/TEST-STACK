//variable of database mongos
const mongoose  = require('mongoose')

mongoose
//create database mean-profiles
.connect("mongodb://localhost/mean-profiles",{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false

})
//Message of confirmation 
.then(db => console.log('DB is connected'))
.catch((err) => console.error(err));