// Loads up the Node FS Module, so it can be used in this script.
const fs = require("fs");


// process.argv has the command line information that was used to run this script.
let arguments = process.argv;

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

console.log(contentArray);

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

//console.log(letterCount);
console.log('The file ${fileName} cotains a total of ${letterCount}letters.');

