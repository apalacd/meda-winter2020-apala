console.log("Hello there!");

let myFirstVariable = 10;
myFirstVariable;

var myFirstGloballScopeVar = 11;

// for (var i = 0; i < 10; i = i + 1) {
    for (let i = 0; i < 10; i = i + 1) {

    setTimeout(function () {
        console.log(i);
    }, 2000);
}

//const masterKey = "hellothere";

const masterKey = "http://www.somewebsite.com/data";


//masterKey = "thisismycodenow"

const january = 1;
const february = 2;//

if (january === 3) {
    console.log("January is the 3rd month.");
} else if (february === 2) {
    console.log("February is the 2nd month");
} else {
    console.log("January is NOT the 3rd month");
}

if (february === 2) {}
// === means we are comparing data AND datatype
//1 == “1” this is TRUE
//1 === “1” this is FALSE

//while (false)  {}     --- not run much used only for a couple runs.

//do {} while ();       ---- run while condition is false or true

//for() {}              ---- run the most, mostly run with increment, 


/*while (false)  {}

do {

} while (false);
*/

for(let i= 0; false; i++) {

}


function myFunction(parameter1, parameter2){
 //    console.log(process.argv);
     console.log(argument[2]);
     console.log(parameter1);

     return "hello";
}

/*myFunction(argument1, argument2, argument3);
myFunction("1", true, 400);


// Anonymous Call back function
//setTimeout(function () {}, 1000);

setTimeout(function (weNeedData) {
    console.log(weNeedData);
    }, 1000);


// Arrow Function
//setTimeout(() => {}, 1000);

setTimeout(weNeedData => {
    console.log(weNeedData);
    console.log();
}, 1000);

setTimeout(weNeedData => console.log(weNeedData), 1000);

//Type Coercion
// Is where JavaSCript converts one datatype to another Automatically.
// 100 == "100" // The string will try to be converted to a number

console.log(100 == "100");
console.log(100 === "100");


let userInput;

// Type conversion into Booleans
//Falsys

//0;
//"";
//undefined;
//NaN; //Does not convert to a boolean, need to use isNan() function.
//null;

//if (NaNisNan)      Example how to use Nan here
if (userInput) {
    console.log("This value is true");
} else {
    console.log("This value is false");
}


// Manual Type Conversion
parseInt(); // takes the string argument, and converts it to a number; Becomes 100
parseFloat("100.100")  // Becomes 100.1


january.toString(); // Takes number from variable or property and converts to a string.

// myArray.toSting();

// Logical Operators and Comparison Operators

/*

==
===
>
<
>=
<=
!=  Not equal to
!==

*
/
+
-
%  Remainder

=
++
--

+=
-+
*=
/=


&&
||
!


*/

if ("100" !== 100){
    console.log("is true");
} else {
    console.log("is false");
}

// Objects and Arrays

let myArray = [1, 2, 3, 4];   //12 undefined follwing 4 in this array

myArray[3];
myArray[0] = 100;
myArray[17] = 9;  // will return 18 as it counts undefined in the myArray
console.log(myArray.length);
myArray[10] = () => {console.log("goodbye")}

// add to end and beginning. need a value in argument.
myArray.push();
myArray.unshift();
//remove to end and beginning.
myArray.pop();
myArray.shift();


let myObject = {
    firstNum: 1,
    secondNum: 2,
    thirdNum: 2,
    fourthNum: 4

};

myObject.firstNum;
myObject["second Num"];
myObject.thirdNum = "three";

let myAssignedFunc = function () {};

let myObjectWithFunc = {
    funcName: () => {console.log("hello there")}
};

myObjectWithFunc.funcName();
Math.floor();
Math.random();



