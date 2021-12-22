const Question = require("../models/Question");
const express = require("express");
const router = express.Router();
const { mongooseToObject } = require('../../util/mongoose')

// @route GET /
router.get("/", (req, res, next) => {
    Question.find({})
        .then((questions) => {
            questions = questions.map((course) => course.toObject());
            res.render("home", {
                questions,
            });
        })
        .catch(next);
});

//@route GET /add
router.get("/add", (req, res) => {
    res.render("add");
});

//@route POST /add
router.post("/add", (req, res) => {
    const question = new Question(req.body);
    question.save();
    res.redirect("/");
});

//@route GETre/edit
router.get("/edit/:id", (req, res, next) => {
    Question.findById(req.param.id)
    .then((question) => {
        question = mongooseToObject(question)
        res.render("edit", {
            question,
        });
    })
    .catch(next);
});

//@route GET /delete
router.get("/delete/:id", (req, res) => {
    Question.findByIdAndRemove(req.params.id).then(() => res.redirect("/"));
});

module.exports = router;
