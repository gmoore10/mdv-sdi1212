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
        }
        else {
            console.log(phoneNumber + " is not a valid phone number.");
        }
    }
};

stringPhoneNumber("407-679-6333");
stringPhoneNumber("abc-dec-6333");
stringPhoneNumber("hello!");

var stringEmailAddress = function () {

};

var stringURL = function () {

};

var stringCapitalizeAllWords = function () {

};

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