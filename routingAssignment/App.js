var express = require("express");
var app = express();

app.get("/", function(req, res) {
   res.send("Hi there, welcome to my assignment!"); 
});

app.get("/speak/:animal", function(req, res) {
   var animal = req.params.animal;
   var result = "";
   
   var sounds = {
     pig: "Oink",
     dog: "Woof Woof!",
     cow: "Moo",
     cat: "I hate you human",
     goldfish: "..."
   };
   
   var sound = sounds[animal];
   
   if(sound) {
       result = "The " + animal + " says '" + sound + "'";
   } else {
       result = "Sorry, no idea how a " + animal + " speaks :(";
   }
   
   res.send(result);
});


app.get("/repeat/:text/:times", function(req, res) {
    var times = req.params.times;
    
    if(!isNaN(times)) {
        times = Number(times);
        var text = req.params.text;
        var result = "";
        for(var i=0; i<times; i++) {
            result += text + " ";
        }
        
        res.send(result);
    } else {
        res.send("Invalid value :(");
    }
});

app.get("*", function(req, res) {
   res.send("Sorry, page not found... What are you doing with your life?"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!");
});