function getFectorial(number){
    let factorial = 1;
    for(let i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}
var firstFactorialNumber = getFectorial(7);
console.log('first factorial number is ' + firstFactorialNumber);
var secondFactorialNumber = getFectorial(9);
console.log('second factorial number is ' + secondFactorialNumber);