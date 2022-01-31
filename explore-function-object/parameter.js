function singaraKhamu(mony){
    console.log('Amake' + ' ' + mony + ' ' + 'Taka Diche Shingara Khaite');
    console.log('Mama Amake Shingara den');
    var singaraPrice = 5;
    var singaraquantity = mony / singaraPrice;
    return singaraquantity;
}
var totalSingara = singaraKhamu(500);
console.log('Ai nen Apner Singara' + ' ' + totalSingara + ' ' + 'Ta')