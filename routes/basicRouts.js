const express=require("express");
const router=express.Router();
const quizController = require("../controllers/quiz");

router.post("/newUser",quizController.createNewUser);
router.post('/addNewQuestion',quizController.addNewQustion);
router.post('/userAnswerToQuestion',quizController.userAnswerToQuestion);


module.exports=router;