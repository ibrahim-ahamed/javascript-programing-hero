// even number 
function evenNumber(evenNo){
    if(evenNo % 2 == 0){
        return true;
    };
    return false;
};

const myEvenNumber =1921;
const evenResult = evenNumber(myEvenNumber);
console.log('my even number ', evenResult);
// odd number
function oddNumber(oddNo){
    if(oddNo % 2 != 0){
        return true;
    };
    return false;
};

const myOddNumber =1921;
const oddResult = oddNumber(myOddNumber);
console.log('my odd number ', oddResult);