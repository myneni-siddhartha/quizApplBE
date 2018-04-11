const mongoose = require("mongoose");
const user = require('../modals/user');
const quiz = require('../modals/quiz');
const attemptedQuestion = require('../modals/attemptedQuestion');



module.exports = {

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
        var newQuestion = new quiz(req.body);
        newQuestion.save()
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.json(err);
            })
    },

    async userAnswerToQuestion(req, res) {
        var attemptedQuestion = new attemptedQuestion(req.body);
        attemptedQuestion.isCorrect = this.checkAnswer(req.body.question,req.body.optionNumber)
        attemptedQuestion.save()
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.json(err);
            })
    }

}

var checkAnswer = async function (questionId, option) {
    try {
        var flag;
        var a = await quiz.find({ _id: mongoose.Types.ObjectId(questionId) })
        if(a.options[option-1].isCorrect== true){
            flag = true;
            quiz.update({_id: mongoose.Types.ObjectId(questionId)},{$inc:{'numberOfCorrectEntries':1}});
        }
        else {
            flag = false;          
        }   
        return flag;
    }
    catch (e) {
        return 404;
    }
}