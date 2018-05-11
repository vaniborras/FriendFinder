
var express = require ("express");
var bodyParser = require ("body-parser");
var path = require ("path");

var htmlRoutes = require ('./routing/htmlRoutes');
var apiRoutes = require ('./routing/apiRoutes');

var app = express ();
var PORT = process.env.PORT||3000;

//THIS ALLOWS HTML TO BE INTERPRETED
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
// app.get("/",function(req, res){
//     res.sendFile(path.join(__dirname,"survey.html"))
// });
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT)
});
