const mongoose = require("mongoose");

const arguments = process.argv;

// The URL that we use to connect to MongoDB Atlas - Replace<Password> with username 
//cosnt db = "mongodb+srv://mongoosePracticeUser:<password>@cluster0.p1q8v.mongodb.net/<dbname>?retryWrites=true&w=majority";
const db = "mongodb+srv://mongoosePracticeUser:mongoosePracticeUser@cluster0.p1q8v.mongodb.net/genericDatabase?retryWrites=true&w=majority";

// Options for Mongoose current connection.
const options = {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true};

// We use connect to actually connect to the database. The connect method needs three arguments, URL, options and callback.
let connection = mongoose.connect(db, options, (error) => {

	// Check if MongoDB gave us an error.
	if (error) {
		// If so, then console log the error. This will display on terminal
		console.log("There was an error!", error);
	} else {
		// If not, then display successfully connected to the database.
		console.log("Successfully connected to MongoDB Database genericDatabase.");
	}
});

// Grab a copy of what a "Schema" is from the mongoose package.
let Schema = mongoose.Schema;

// Customize our Schema so mongoose knows in what format the document should be.
let  exampleSchema = new Schema({
	username: String,
	password: String,
	created: String,
	age: Number,
	accountClosed: Boolean
});

// Create the model for mongoose, we look for a specific collection, and we are going to work with a specific schema.
let exampleModel = new mongoose.model("firstcollections", exampleSchema);

// Create a new document and fill it with data. Must match how we designed our schema.
/*  let exampleDocument = new exampleModel({
	username: "Susan",
	password: "123456",
	created: "Dec 02, 2020",
	age: 45,
	accountClosed: false
*/
let exampleDocument = new exampleModel({
	username: arguments[2],
	password: arguments[3],
	created: Date.now(),
	age: arguments[4],
	accountClosed: false
});

// CREATE
// call back will run when we get a message from MongoDB.
exampleDocument.save((error) => {

	// We check if we got an error or not and console log accordingly.
	if (error) {
		console.log(error);

	} else {
		console.log("Document saved!");
	}

	// Once we have saved this document, then we have the option of closing the connection so we can end running this script.
	// mongoose.connection.close();
	// console.log("Connection closed!");
	
});

/* let secondDocument = new exampleModel({
	username: "Alexander",
	created: "Dec 3, 2020",
	age: 24,
	accountClosed: true,
	nickname: "Alex"
});

secondDocument.save(error) =>  {
	if (error) {
		console.log(error);
	} else {
		console.log("saved!");
	}
});
*/

setTimeout(() => {
	mongoose.connection.close();
	console.log("connection closed!");
}, 5000);
