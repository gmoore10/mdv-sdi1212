var stringPhoneNumber = function (phoneNumber) {
    var firstDash = phoneNumber.indexOf("-");
    var secondDash = phoneNumber.lastIndexOf("-");

    if (phoneNumber.search(/\d{3}\-\d{3}\-\d{4}/) == -1) {
        console.log(phoneNumber + " is not valid phone number.");
    } else {
        var prefix = phoneNumber.substring(0, firstDash)
        var middle = phoneNumber.substring(firstDash + 1, secondDash);
        var end = phoneNumber.substring(secondDash + 1, phoneNumber.length);

        if (isNaN(prefix) === false && isNaN(middle) === false && isNaN(end) === false) {
            console.log(phoneNumber + " is a valid phone number.");
            return true;
        }
        else {
            console.log(phoneNumber + " is not a valid phone number.");
            return false;
        }
    }
};

stringPhoneNumber("407-679-6333");
stringPhoneNumber("abc-dec-6333");
stringPhoneNumber("hello!");

var stringVerifyEmail = function (emailAddress) {
    if (emailAddress.search(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) == -1) {
        console.log(emailAddress + " is not valid email address.");
        return false;
    } else {
        console.log(emailAddress + " is a valid email address.");
        return true;
    }
}

stringVerifyEmail("407-679-6333");
stringVerifyEmail("gmoore10@fullsail.edu");
stringVerifyEmail("hello!");

var stringVerifyURL = function (urlString) {
    var doubleSlash = urlString.indexOf("/")+2;
    var httpPrefix = urlString.substring(0, doubleSlash);

    if (httpPrefix === "http://" || httpPrefix === "https://") {
        console.log(urlString + " is a valid URL");
        return true;
    } else {
        console.log(urlString + " is not a valid URL");
        return false;
    }
};

stringVerifyURL("407-679-6333");
stringVerifyURL("http://www.fullsail.edu");
stringVerifyURL("https://www.google.com");
stringVerifyURL("hello!");

var stringCapitalizeAllWords = function (sentenceToUpper) {
    var wordArray = sentenceToUpper.split(" ");
    var sentenceRebuild;
    
    for (var i = 0; i < wordArray.length; i++) {
        var word = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
        wordArray[i] = word;
    }
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
    console.log(sentenceRebuild);
    return sentenceRebuild;
};

stringCapitalizeAllWords("welcome to the seventh circle of hell!");
stringCapitalizeAllWords("We need to go that-a-way.");
stringCapitalizeAllWords("full sail university har har har");

var stringChangeSeparator = function () {

};

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