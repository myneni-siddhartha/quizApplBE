const mongoose = require('mongoose');

const question = new mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    options:[{
        answer:{
        type:String,
        required:true
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
    },
    numberOfAttempts:{
        type:Number,
        default:0
    }
    

})

module.exports = mongoose.model('question', question)
