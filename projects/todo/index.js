const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const credentials = require("./credentials.js"); //add in .gitignore before uploading to github repository 

//console.log(credentials.addThese(10,20));

//const dbCredentials = "mongodb+srv://todoUser:todoUser@cluster0.p1q8v.mongodb.net/todoApp?retryWrites=true&w=majority";
const dbCredentials = credentials.dbURL;
console.log(dbCredentials);
const dbOptions = {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true};
let dbConnection = mongoose.connect(dbCredentials, dbOptions, (error) => {
    if (error) {
        console.log("Mongoose error: " + error);
    } else {
        console.log("MongoDB connection opened!");
    };
});

let todoSchema = new mongoose.Schema({
    title: String,
    text: String,
    completed: Boolean,
    archived: Boolean,
    priority: Number,
    timestamp: Number
});

let todoModel = new mongoose.model("notecollections", todoSchema);

const port = 3001;

const app = express();
const http = require("http").Server(app);
http.listen(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

console.log("Express server is running on port " + port);

app.use("/", express.static("client/"));

app.post("/newNote", (request, response) => {

    const note = request.body;
    
   //console.log(note);
   
   // Sanitize Inputs
   let newNoteDocument = new todoModel({
       title: note.title,
       text: note.text,
       completed: (note.completed === "true"),
       archived: (note.archived === "true"),
       priority: parseInt(note.priority),
       timestamp: parseInt(note.timestamp)
   });

   newNoteDocument.save((error) => {
       
           const responseObject = {
               saved: false,
               savedTasj: newNoteDocument,
               error: null
           };

           if (error) {
                response.send(responseObject);
           } else {
                responseObject.saved = true;
                response.send(responseObject);
           }

        
    });      


});

app.post("/getList", (request, response) => {
    todoModel.find({}, (error, results) => {

        let responseObject = {
            list: results, //array of objects passed as an argument
            error: null
        };

        if (error) {
            console.log("failed to read database.");
        } else {
            response.send(responseObject);
        };

});

});

// variables for receiving req for request and res for results
app.post("/modify", (req, res) => {

    let request = req.body;

    if (request.action === "delete") {
        todoModel.findByIdAndDelete(request.id, (error, deleted) => {     // Mongoose method
            if (error) {
                console.log(error);
            } else {
                let response = {
                    copy: deleted   //copy is the Object that holds original task for undo
                }

                res.send(response);
            }
            
        });    
    }

});
