// Loads up the Node FS Module, so it can be used in this script.
const fs = require("fs");


// process.argv has the command line information that was used to run this script.
let arguments = process.argv;

//const serverPassword = 123456; -- instead use json for storing data
 
let 
// Ceck if we have an existing file called "history.txt"
if fs.existsSync("history.txt")){      //Give a complete string of file path

    let history = fs.readFileSync("history.txt");
}

// console.log(arguments);//

let fileName = arguments[2];

console.log(fileName);


//fs.existsSync();  Function that checks if the file exists

if (fileExists == false) {
    console.log("Sorry, that file doesn't exist! Check your filepath.");
    return;
}

//This readFileSync method allows us to read a file.
//let fileContents = fs.readFileSync("essay.txt", "utf-8");

let fileContents = fs.readFileSync(fileName, "utf-8");
//console.log(fileContents);

let contentArray = fileContents.split("");

//console.log(contentArray);

let letterCount = 0;

/*for (let i=0; i< contentArray.length; i++) {

    if (contentArray[i] === " ") {    */

for (let i=0; i< contentArray.length; i++) {

    if (contentArray[i] === " " || contentArray[i] === "," || contentArray[i] === "." || contentArray[i] === "?" || contentArray[i] === "!") {        
        continue;
    } else {
        letterCount++;

    }
}

let exampeURL = "http://www.google.com/";

//console.log(letterCount);
console.log('The file ${fileName} cotains a total of ${letterCount}letters.');

// Count Letters END

// Count Words START

//fileContents.split(" ");

let wordArray = fileContents.split(" ");


console.log(wordArray.length);
let secondSentence('It as a total of ${wordArray.length} words in it.');    

//\n for new line, \t for tab
// 'Statistics \"saved" 
let exampeURL = "http://www.google.com/";

//Count Words END

// Count Sentences STARAT

let sentenceCount = 0;

for (let i = 0; i < contentArray.lenth; i++) {
    if (contentArray[i] === "." || contetnArray[i] === "!" || contentArray[i] === "?" || contentArray[i] ==="?") {

        sentenceCount++;  

    }
}

console.log('It as a total of ${sentenceCount} sentences in it.');

// save the string in the history variable to the file.

console.log("");  // create an empty line 
console.log("Statistics saved ")  //the string beginning with \n can accomplish by adding a new line but recommended is having an empty string as above.




