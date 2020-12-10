const mongoose = require("mongoose");

const arguments = process.argv;

// The URL that we use to connect to MongoDB Atlas.
const db = "mongodb+srv://mongoosePracticeUser:mongoosePracticeUser@cluster0.p1q8v.mongodb.net/genericDatabase?retryWrites=true&w=majority";

// Options for Mongoose current connection.
const options = {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true};

// We use connect to actually connect to the database. The connect method needs three arguments, URL, options, and callback.
let connection = mongoose.connect(db, options, (error) => {
    
    // Check if MongoDB gave us an error.
    if (error) {
        // If so, console log the error.
        console.log("There was an error!", error);
    } else {
        // If not, say successfully connected to database.
        console.log("Successfully connected to MongoDB Database genericDatabase.");
    }

});

//Grab a copy of what a "Schema" is from the mongoose package.
let Schema = mongoose.Schema;

// Customize our Schema so mongoose knows how the document should be "formatted".
let exampleSchema = new Schema({
    username: String,
    password: String,
    created: String,
    age: Number,
    accountClosed: Boolean
});

// Create the model for mongoose, we look for a specific collection, and we are going to work with a specific schema.
let exampleModel = new mongoose.model("firstcollections", exampleSchema);

// Read from firstcollections collection.
//exampleModel.find({function parameter}, <callback> })
exampleModel.find({username: "Susan"}, (error, results) => {
    if (error) {
        console.log("There was an error reading the database.", error);
    } else {
        console.log("Successfully read the database.");
        console.log("We found something!", results);
    }
});