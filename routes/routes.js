
const express = require("express");
const router = express.Router();
const Quiz = require("../models/quizModel");
const cron = require("node-cron");
const moment  = require("moment");

router.use(express.json());


router.post("/quizzes", async (req, res) => {
    try {
        const {question, options, rightAnswer, startDate, endDate} = req.body;
        const quiz = await Quiz.create({
            question, options,rightAnswer, startDate, endDate
        })
        res.status(201).json({
            message: "Success",
            quiz
        })

    }catch(e){
        res.status(500).json({
            message: e.message
        })

    }
})

router.get("/quizzes/all", async(req, res)=> {
try{
    const quizes = await Quiz.find().sort({createdAt:-1});
    res.status(200).json({
        message:"success",
        quizes
    })
}catch(e){
    res.status(500).json({
        message: e.message
    })
}
})
router.get("/quizzes/:id/result", async(req, res)=>{
    try {
        const _id = req.params.id;
        const quiz = await Quiz.findOne({_id});
        if(!quiz){
            res.status(404).json({
                message:"No quiz is there"
            })
        }
        else {
            res.status(200).json({
                message: "Success",
                quiz
            })
        }
    }catch(e){
        res.status(500).json({
            message: e.message
        })

    }
})

  router.get('/apis', async (req, res) => {
   try{

    const now = moment(); // current datetime
    const activeQuiz = await Quiz.find({
      startDate: { $lte: now },
      endDate: { $gte: now },
    });
    if(!activeQuiz){
        res.json("No active");
    }
    else{
        res.json(activeQuiz);
    }
    
   }catch(e){
   }
  });


module.exports = router;