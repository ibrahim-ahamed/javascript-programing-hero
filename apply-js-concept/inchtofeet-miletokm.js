function inchTofeet(inches){
    var feet = inches / 12;
    return feet;
};

var myInch = 500;
var feet = inchTofeet(myInch);
console.log('inch to feet result', feet);

function feetToinch(feet){
    var inches = feet * 12;
    return inches;
};

var myFeet = 500;
var inches = feetToinch(myFeet);
console.log('feet to inches result', inches);