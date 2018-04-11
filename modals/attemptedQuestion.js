const mongoose = require('mongoose');

const attemptedQuestion = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'quiz',
        required:true,
        unique:true
    },
    optionNumber:{
        type:Number,
        required:true,
        default:0
    },
    isCorrect:{
        type:Boolean,
        default:false
    }

})
module.exports = mongoose.model('attemptedQuestion', attemptedQuestion)
