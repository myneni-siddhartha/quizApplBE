const mongoose = require("mongoose");
const user = require('../modals/user');
const question = require('../modals/question');
const attemptedQuestion = require('../modals/attemptedQuestion');

const abc = require('../modals/testModal');

module.exports = {

    // async testModalGetDeletedClgs(req,res){
    //  try{   var a = await abc.find({"isDeleted":true});
    //     res.json(a);
    // }
    // catch(e){
    //     res.json(e);
    // }
    // },

    async createNewUser(req, res) {
        console.log("user>>>", req.body)
        var newUser = new user(req.body);
        newUser.save()
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.json(err);
            })
    },

    async addNewQustion(req, res) {
        var newQuestion = new question(req.body);
        newQuestion.save()
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.json(err);
            })
    },

    async getAllQuestions(req,res){
        try{
            var q = await question.find({}).select('question options options.answer options.optionNumber');
            // console.log(q);
            res.json(q)              
        }
        catch(e) {
            res.json(e);
        }
    },

    async userAnswerToQuestion(req, res) {
        console.log(">>>>", req.body)
        var newattemptedQuestion = new attemptedQuestion(req.body);
        var flag = await checkAnswer(req.body.question, req.body.optionNumber);
        console.log("main>>",flag)
        newattemptedQuestion.isCorrect = flag;
        if (flag == true) {
            console.log(flag)
            question.update({ _id: req.body.question }, { $inc: { 'numberOfCorrectEntries': 1,'numberOfAttempts':1 } })
            .then(console.log("increased the number of coorrect answers"))
        }
        else{
            question.update({ _id: req.body.question }, { $inc: { 'numberOfAttempts':1 } })
            .then(console.log("increased the number attempted"))
        }
        newattemptedQuestion.save()
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.json(err);
            })
    },

    async getMarksOfUser(req,res){
        try{
            var numberOfCorrectEntries = await attemptedQuestion.count({user:req.body.userId,isCorrect:true})
            var numberOfEntries = await attemptedQuestion.count({user:req.body.userId});            
            console.log("numberOfCorrectEntries>>",numberOfCorrectEntries)
            console.log("numberOfEntries>>",numberOfEntries);
            res.json({numberOfCorrectEntries:numberOfCorrectEntries,numberOfEntries:numberOfEntries})         
        }
        catch(e) {
            res.json(e);
        }
    },

    async getQuestionsAttemptedByUser(req,res){
        try{
            var questions = await attemptedQuestion.find({user:req.body.userId}).populate({path:'question'})
            // console.log("sdads",questions)            
            res.json({questions})         
        }
        catch(e) {
            res.json(e);
        }
    }



}

var checkAnswer = async function (questionId, option11) {
    try {
        var flag;
        console.log("checkanswer function",option11)
        var b = await question.aggregate([{$unwind:'$options'},{$match:{'_id':questionId, 'options.optionNumber':Number(option11)}}])
        
            console.log(b);
            // console.log("asdasdasd>>>",b[0].options)
            flag = b[0].options.isCorrect;
        
            return flag;
    }
    catch (e) {
        return 404;
    }
}