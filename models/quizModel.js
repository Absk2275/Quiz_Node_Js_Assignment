const mongoose  = require("mongoose");
const quizSchema  = new mongoose.Schema({
    question: String,
    options: [{text:
        { type: String, required: true },
    }],
    rightAnswer:String,
    startDate: {type:Date, require:true},
    endDate: {type:Date, require: true},
    endDate: String,
    status: {type:Number, default:0}

}, {timestamps:true})

const quiz = mongoose.model("quizdata", quizSchema);

module.exports = quiz;