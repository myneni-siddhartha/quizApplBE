const mongoose = require('mongoose');

const quiz = new mongoose.Schema({
    question:{
        type:String,
        required:true,
        unique:true
    },
    options:[{
        answer:{
        type:String,
        required:true,
        unique:true
        },
        isCorrect:{
            type:Boolean,
            required:true,
            default:false
        },
        optionNumber:{
            type:Number,
            required:true
        }
    }],
    numberOfCorrectEntries:{
        type:Number,
        default:0
    }
    

})

module.exports = mongoose.model('quiz', quiz)
