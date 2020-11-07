// JSON rules :
// Rule 1 : All keys MuST be in quotes.
// Rule 2 : No functions allowed.
// Rule 4 : no comments.
// Json can hold only one object

// Functions, classes and methods are not allowed in JSON file.
//

const fs = require("fs");  // use fs function

const fileExists = fs.existsSync("example.json"); //check if "example.json" exists

let contents;  // declare a string variable

if (fileExists) {
    contents= fs.readFileSync("example.json", "utf-8");
} else {
    console.log("File does not exist. Quitting...");
    return;

}

let contentsObject = JSON.parse(contents);

console.log(typeof contents.name);  // console log contents as type string
console.log(typeof contentsObject); // type object contents as type object ( this will ommit the function ability)

const myObject = {
    "lastName" : "Doe",
    "ability" : function () {
        // "this keyword refers to the object it is in."
        console.log(this.lastName + " is eating food");  // 'this' here represents object itself
    },
    possessions: ["car", "house", "refridgerator"], 
    deceased: false,
    age: 45,
    "is fun": false,
    lastUpdate: "11/4/2020",
    lastUpdateObject: new Date(Date.now())
};

let jsonObectConverted = JSON.stringify(myObject);  // convert object into a string while parsing

//console.log(jsonObjectConverted);

fs.writeFileSync("savedJSON.json", jsonObectConverted, "utf-8");

myObject.ability();

myObject.age;  //() only if there is a function inside of this object
myObject["is fun"];

let parsedStringifiedJSON = fs.readFileSync("savedJSON.json", "utf-8");

parsedStringifiedJSON = JSON.parse(parsedStringifiedJSON);

console.log(myObject);
console.log(parsedStringifiedJSON);