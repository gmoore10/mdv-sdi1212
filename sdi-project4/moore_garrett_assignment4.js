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