//Garrett Moore
//Javascript Library
//SDI Project 4

var jsLib = function () {

    //Check if format is phone number
    var stringPhoneNumber = function (phoneNumber) {
        //Indexes of dashes are needed.
        var firstDash = phoneNumber.indexOf("-");
        var secondDash = phoneNumber.lastIndexOf("-");

        //Using Regex, check if string is in three-three-four format
        if (phoneNumber.search(/\d{3}\-\d{3}\-\d{4}/) == -1) {
            return false;
        } else {
            //First IF only checks for format, not numbers
            //We need to separate each block of characters and make sure
            //they only have number in them.
            var prefix = phoneNumber.substring(0, firstDash)
            var middle = phoneNumber.substring(firstDash + 1, secondDash);
            var end = phoneNumber.substring(secondDash + 1, phoneNumber.length);

            if (isNaN(prefix) === false && isNaN(middle) === false && isNaN(end) === false) {
                return true;
            }
            else {
                return false;
            }
        }
    };

    //Check if format is Email
    var stringVerifyEmail = function (emailAddress) {
        
        //Using Regex, verify if string follows aaa@bbb.ccc
        if (emailAddress.search(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) == -1) {
            return false;
        } else {
            return true;
        }
    };

    //Check if format is Email
    var stringVerifyURL = function (urlString) {

        //Need position of character after first slash
        var doubleSlash = urlString.indexOf("/") + 2;
        var httpPrefix = urlString.substring(0, doubleSlash);

        if (httpPrefix === "http://" || httpPrefix === "https://") {
            return true;
        } else {
            return false;
        }
    };

    //Take in string and capitalize first letter of every word.
    var stringCapitalizeAllWords = function (sentenceToUpper) {
        var wordArray = sentenceToUpper.split(" ");
        var sentenceRebuild;

        //Grab each entry in wordArray and capitalize char 0.
        for (var i = 0; i < wordArray.length; i++) {
            var word = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
            wordArray[i] = word;
        }

        //Rebuild string by adding each word back into the string.
        for (var i = 0; i < wordArray.length; i++) {
            if (i === 0) {
                sentenceRebuild = wordArray[i] + " ";
            } else if (i === wordArray.length) {
                sentenceRebuild = sentenceRebuild + wordArray[i];
            }
            else {
                sentenceRebuild = sentenceRebuild + wordArray[i] + " ";
            }
        }
        return sentenceRebuild;
    };

    //Take in string of values separated by a separator and replace with given replacementSeparator
    var stringChangeSeparator = function (separatedString, separator, replacementSeparator) {

        //Break out each separated string
        var stringArray = separatedString.split(separator);
        var stringRebuild;

        //Rebuild string, adding in replacementSeparator after each array entry.
        for (var i = 0; i < stringArray.length; i++) {
            if (i === 0) {
                stringRebuild = stringArray[i] + replacementSeparator;
            } else if (i === stringArray.length - 1) {
                stringRebuild = stringRebuild + stringArray[i];
            }
            else {
                stringRebuild = stringRebuild + stringArray[i] + replacementSeparator;
            }
        }

        return stringRebuild;
    };

    //Public
    return {
        "isPhoneNumber": stringPhoneNumber,
        "isEmail": stringVerifyEmail,
        "isURL": stringVerifyURL,
        "wordsToUpper": stringCapitalizeAllWords,
        "changeSeparator": stringChangeSeparator,
    };
};

var lib = new jsLib();

var validPhone = lib.isPhoneNumber("407-555-1234");
var validEmail = lib.isEmail("gmoore10@fullsail.edu");
var validURL = lib.isURL("http://www.cnn.com");
var sentenceUpper = lib.wordsToUpper("This is a sentence.");
var separateByDash = lib.changeSeparator("a.b.c.d.e.f.g.h", ".", "-");

console.log("Valid Phone: " + validPhone);
console.log("Valid Email: " + validEmail);
console.log("Valid URL: " + validURL);
console.log("Uppercase All Words: " + sentenceUpper);
console.log("Dots to Dashes: " + separateByDash);

var numberDecimalPlaces = function () {

};

var numberFuzzyMatch = function () {

}

var numberDayDiff = function () {

};

var numberConvertFromString = function () {

};

var arraySmallestValue = function () {

};

var arraySumArray = function () {

};

var arraySortWithKey = function () {

};

//alert("JavaScript works!");