// This is the start of a function definition, it has the name of "myFunction", and has two parameters to hold incoming data, "option1" and "option2".
function myFunction(option, option2) {

    //declare a local variable product and initialize it with the result of multiplying values passed in parameters option and option2 in myFunction() First time execution of myFunction carry values as option=1, option2=11, Second time execution of myFunction() carry values as option=2, option2=200

    let product = option * option2;

    //After first execution of myFunction() display the value of the product as 11 on console log, which is result of multiplying values of option and option2 ie; 1*11 = 11. Second execution of myFunction() will display the value of the product of option=2 and option2=200 as 400 on console log
    console.log(product);

    //first execution of myFunction() display the value of option as 1, second execution of myFunction() display the value of option as 2
    console.log("The value of the option parameter is " + option);

    //check if value and data type of option is equal to 0. For first execution of myFunction() it is false, since the value of option is 1 which has the same data type however it is not equal to 0. For second execution of myFunction() also it is false, since the value of option is 2 which has the same data type however it is not equal to 0.
    if (option === 0) {
        
        //If the above condition is true then return string "Everything is good!" to myFuction().
        return "Everything is good!";

    // Else If above condition is false then check if value and data type of option is equal to 1. For first execution of myFunction() it is true, since the value of option is 1 which has the same data type and value of 1. For second execution of myFunction() also it is false, since the value of option is 2 which has the same data type however it is not equal to 1.
    } else if (option === 1) {
        
        //If  above condition is true then return string "An error happened!" to myFunction()
        return "An error happened!";

    // Otherwise if the above two conditions are false, then check if value and data type of option is equal to -1. For first execution of myFunction() it is false, since the value of option is 1 which has the same data type however it is not equal to -1. For second execution of myFunction() also it is false, since the value of option is 2 which has the same data type however it is not equal to -1.
    } else if (option === -1) {
        
        //If above condition is true then return string "Everything is bad!" to myFunction()
        return "Everything is bad!";
    }

}

//parse arguments values 1, 11 to the function myFunction() and store the return value from executing myFunction in the local variable result, which is "An error happened" though it will not get displayed on console log.
let result = myFunction(1, 11);

//parse arguments values 2, 200 to the function myFunction() and store the return value from executing myFunction in the local variable result2. No return value gets stored in result2 as the condition is not handled in the if statements above.
let result2 = myFunction(2, 200);

// check if it is true - that the return value in result is of type string and has value "An error happened" and also the return value in result2 has the same datatype and value as string "An error happened". However, this condition will never hold true since the values returned will mismatch. An "!" is missing in the following condition

if ( result === "An error happened" && result2 === "An error happened") {

    //If above conditon is true, then display string "Catastrophic failure" on console log
    console.log("Catastrophic failure.");

}