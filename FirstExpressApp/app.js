var express = require("express");
var app = express();

app.get("/", function(req, res) {
   res.send("Hi there!"); 
});

app.get("/bye", function(req, res) {
   res.send("Goodbye!!") 
});

app.get("/dog", function(req, res) {
   console.log("SOMEONE MADE A REQUEST TO DOG!!");
   res.send("MEOW!"); 
});

app.get("/r/:subredditName", function(req, res) {
   res.send("WELCOME TO THE " + req.params.subredditName.toUpperCase() + " SUBREDDIT!"); 
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
   res.send("WELCOME TO THE COMMENTS!"); 
});

app.get("*", function(req, res) {
   res.send("YOU'RE A STAR!!"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!");
});