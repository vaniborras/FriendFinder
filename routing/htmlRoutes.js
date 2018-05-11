var express = require("express");
var htmlRouter = express.Router();

// ===============================================================================
var path = require("path");


// ROUTING


// module.exports = function(app) {

// If no matching route is found default to home
htmlRouter.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

htmlRouter.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });


// /};

module.exports = htmlRouter;