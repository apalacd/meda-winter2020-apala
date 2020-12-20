const fs = require("fs");
const helpers = require("./helpers.js");
const Title = require("./Title.js");

//Read in our dataset.
const data = fs.readFileSync("Hourly_Rates.csv", "utf-8");

// Split up the string into an Array, each array element holds an entry.
const dataArray = data.split("\n");

// Removed unneccessary lines
dataArray.shift();
dataArray.pop();

//--------------Moved to Title.js ------------------
// class Title {
//     constructor(year, jobCode, title, unionCode, setID, min, max) {
//         this.year = year;
//         this.setID = setID;
//         this.jobCode = jobeCode;
//         this.title = title;
//         this.unionCode = unionCode;
//         this.biWeeklyMin = min;
//         this.biWeeklyMax = max;
//         this.biWeeklyAvg = (min + max) / 2;
//         this.steps = [];
//     } 

// }
//--------------Moved to Title.js ------------------

titleArray = [];

for ( let i = 0; i < dataArray.length; i++) {
    let entry = dataArray[i].split(",");
    //console.log("This is executing");
    let fixedEntry = helpers.checkTitleCommas(entry);
    let entryTitleObject = new Title(fixedEntry[1], fixedEntry[2], fixedEntry[3], fixedEntry[4], fixedEntry[5], fixedEntry[6], parseint(fixedEntry[7]), parseint(fixedEntry[8]));

    titleArray.push(entryTitleObject);
}

// console.log(dataArray[0]);

// let example = dataArray[0].split(",");

// example = checkTitleCommas(example);

// //console.log(example);

// //example[3] = example[3] + example[4];
// //example.splice(4, 1);

// let exampleObject = new Title(example[1], example[2], example[3], example[4], example[5], parseInt(example[7]), parseInt(example[8]));

// console.log(exampleObject);



//Figure out how to "fix" titles with commans in it, Using positive lookahead.


/*console.log(dataArray[0]);
console.log(dataArray[dataArray.length - 1]);
console.log(dataArray.length); */



// Question 1 START
console.log("What Union has the most members?.");


let unions = {};

titleArray.forEach(function (element) {
    let currentUnion = element.unionCode.toString();
    let currentYear = element.year;
    let currentYearArray = currentYear.split("/")

    if (currentYEarArray[0] === " 2018") {
        if (unions.currentUnion === undefined) {
            unions[currentUnion] = 1;
        } else {
            //console.log("added a 1!") // This is to debug and check if else statement is getting executed 
            unions[currentUnion] += 1;
        }
    }
});

let highestUnionMemberCount = 0;
let highestUnionCode = null;

for (let i in unions) {   // i holds the value of the union key
//    console.log(i);  // Check if the correct values are being picked
    if (unions[i] > highestUnionMemberCount) {
        highestUnionMemberCount = unions[i];
        highestUnionCode = i;
    }
}

//console.log(unions);

console.log(`The Union with code ${highestUnionCode} has a member count of ${highestUnionMemberCount} for the yar of 2018.`);
//Question 1 END

//Question 2 BEGIN

console.log("What job Title pays the most within each union code?")

let highestUnionPay = [];

/*

[ 
    {
        unionCode: 352,
        highest: 12574,
        title: "Chief of Department"
    },
    {
        unionCode: 220,
        highest: 6808,
        title: "Law Librarian"
    }
]

*/

titleArray.forEach(function (job) {

    let jobYear = job.year.split("/")[0];

    if (jobYear === "2012") {

        let found = false;

        highestUnionPay.forEach(function (unionCounter) {

            if (unionCounter.unionCode === job.unionCode) {

                found = true;

                if (job.biWeeklyAvg > unionCounter.highest) {
                    unionCounter.highest = job.biWeeklyAvg;
                    unionCounter.title = job.title;
                }
            }
        });

        if  (!found) {
            highestUnionPay.push({
                unionCode: job.unionCode,
                highest: job.biWeeklyAvg,
                title: job.title
            });

        }

    }

});

let orderedUnionPay = highestunionPay.sort(function (a, b) {
    if (a.unionCode > b.unionCode) {
        return 1;
    } else if (a.unionCode < b.unionCode) {
        return -1;
    } else {
        return 0;
    }
});

for (let i =0; i < orderedUnionPay.length; i++) {
    let currentUnion = orderedUnionPay[i];

    console.log(`The highest paying job in 2018 for the Union with code ${currentUnion.unionCode} is ${currentUnion.title} with a biWeekly income of $${currentUnion.highest}.`);
}

// Question 2 END

// (n)^2
// for () {

//   for () {

//   }

// }

// 2(n)
// for () {}

// (n)
// for () {}



















//Move the following to create a helper.js with helper functions 
// function checkTitleCommas(titleString) {

//     console.log(titleArray[3].charAt(0));

//     if (titleString[3].charAt(0) === '"') {

//         /* 
//         Check the last character of the current array element.
//         if character is not a " then move to next array element.
//         if character is " then combie all elements wince index 3, remove extra array elements
//         */

//         let doubleQFound = false;
//         let currentArrayElement = 3;

//         //------------------------------------------------------------
//         // while (!doubleQFound) {  //! reverses the boolen
//         //     let lastCharacterIndex = titleArray[currentArrayElement].length -1;

//         //     if (titleArray[currentArrayElement].charAt(lastCharacterIndext) === '"') {
//         //         doubleQFound = true;
//         //     } else {
//         //         currentArrayElement += 1;
//         //     }
//         // }
//         //------------------------------------------------------------
//         // Replacing the above while loop with the following for loop for efficiency and readability
// //
//         for (currentElement; !doubleQFound; currentElement++) {
//             if (titleArray[currentElement + 1].charAt(titleArray[currentElement + 1].length - 1) === '"') {
//                 doubleQFound = true;
//             }
//         }

//         let cutOutArray = titleArray.splice(3, currentArrayElement -2);

//         let combinedTitleString = cutOutArray.join(",");

//         console.log(combinedTitleString);

//         titleArray.splice(2, 0, combinedTitleString);





//         //--------------replace following code with a loop above ---

//         // let lastCharaterIndex = titleString.lentgh - 1;

//         // if (titleString[4].charAt(lastCharaterIndex) === '"') {

//         //     titleArray[3] = titleArray[3] + titleArray[4];

//         //     titleArray.splice(4, 1);

//         // } else if (titleArray[5].charAt(titleArray[5].length - 1) ==="'") {

//         //     titleArray[3] = titleArray[3] + titleArray[4] + titleArray[5];

//         //     titleArray.splice(4, 2);
//         // }

//         //------------------------------------------------------------

//         return titleArray;

//     } else {
        
//         return titleArray;
//     }
//     }
// }