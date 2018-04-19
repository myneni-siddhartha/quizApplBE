const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const app=express();

var routes = require('./routes/basicRouts');


const cors = require("cors");





//Connecting to database
mongoose.Promise = global.Promise;
mongoose.connect("", { 'useMongoClient': true })
    .then(() => console.log("Connected to quizBE..."))
    
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/',routes);



app.listen(3000,function(err){
    if(err){    
        console.log("Error occured ");
    }
    else{
        console.log("quizBE running ");
    }
});