function checkTitleCommas(titlearray) {

    //console.log(titleArray[3].charAt(0));

    if (titleArray[3].charAt(0) === '"') {

        /* 
        Check the last character of the current array element.
        if character is not a " then move to next array element.
        if character is " then combie all elements wince index 3, remove extra array elements
        */

        let doubleQFound = false;
        //let currentArrayElement = 3;
        let currentElement = 3;

        //------------------------------------------------------------
        // while (!doubleQFound) {  //! reverses the boolen
        //     let lastCharacterIndex = titleArray[currentArrayElement].length -1;

        //     if (titleArray[currentArrayElement].charAt(lastCharacterIndext) === '"') {
        //         doubleQFound = true;
        //     } else {
        //         currentArrayElement += 1;
        //     }
        // }
        //------------------------------------------------------------
        // Replacing the above while loop with the following for loop for efficiency and readability
//
        for (currentElement; !doubleQFound; currentElement++) {
            if (titleArray[currentElement + 1].charAt(titleArray[currentElement + 1].length - 1) === '"') {
                doubleQFound = true;
            }
        };

        let cutOutArray = titleArray.splice(3, currentElement - 2);

        let combinedTitleString = cutOutArray.join(",");

        console.log(combinedTitleString);

        titleArray.splice(3, 0, combinedTitleString);


        //--------------replace following code with a loop above ---

        // let lastCharaterIndex = titleString.lentgh - 1;

        // if (titleString[4].charAt(lastCharaterIndex) === '"') {

        //     titleArray[3] = titleArray[3] + titleArray[4];

        //     titleArray.splice(4, 1);

        // } else if (titleArray[5].charAt(titleArray[5].length - 1) ==="'") {

        //     titleArray[3] = titleArray[3] + titleArray[4] + titleArray[5];

        //     titleArray.splice(4, 2);
        // }

        //------------------------------------------------------------

        return titleArray;

        } else {
            
            return titleArray;
        }
    };

module.exports = {
    checkTitleCommas
};