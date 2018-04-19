const express=require("express");
const router=express.Router();
const quizController = require("../controllers/quiz");

router.post("/newUser",quizController.createNewUser);
router.post('/addNewQuestion',quizController.addNewQustion);
router.post('/getAllQuestions',quizController.getAllQuestions);
router.post('/userAnswerToQuestion',quizController.userAnswerToQuestion);
router.post('/getMarksOfUser',quizController.getMarksOfUser);
router.post('/getQuestionsAttemptedByUser',quizController.getQuestionsAttemptedByUser);

// router.post('/getdeleted',quizController.testModalGetDeletedClgs);

module.exports=router;