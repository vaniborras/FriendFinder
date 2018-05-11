
var express = require("express");
var apiRouter = express.Router();

var surveyData = require("../app/data/friends.js");

// ROUTING

    apiRouter.get("/home", function(req, res) {
        res.json(surveyData);
    });

    apiRouter.get("/survey", function(req, res) {
        res.json(surveyData);
    });

    apiRouter.get("/friends", function(req, res) {
    return res.json(surveyData);
});


    apiRouter.post("/friends", function(req, res) {
            surveyData.push(req.body);
            res.json(true);

    });



    apiRouter.post("/clear", function() {
        // Empty out the arrays of data
        surveyData = [];

        console.log(surveyData);
    });

module.exports = apiRouter;