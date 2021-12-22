const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Question = new Schema({
    text: { type: String, require: true },
    answers: { type: Array, maxlength: 600 },
    correctAnswer: { type: String, maxlength: 600 },
});

module.exports = mongoose.model("Question", Question);
