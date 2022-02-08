function singaraKhamu(taka){
    var totalTakaDise = 'amake boro bhai' + ' ' + taka + ' ' + 'taka dise singara ante';
    console.log(totalTakaDise);
    console.log('mama amake' + ' ', taka + ' ' + 'taka er singara den')
    var singaraDam = 10;
    var totalSingara = taka / singaraDam;
    return totalSingara;
};
var mony = 500;
var totalSingaraPaise = singaraKhamu(mony);
console.log('ai nen apner' + ' ' + mony + ' ' + 'takar' + ' ' + totalSingaraPaise + ' ' + ' ta singara');