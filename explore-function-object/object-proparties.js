var computerInfo = {
    display: '15.5 inch',
    price: 35000,
    proccesore: 'intel cor i5'
};
console.log(computerInfo);
console.log(computerInfo.price);

computerInfo.price = 50000;
console.log(computerInfo)

computerInfo['price'] = 50000;
console.log(computerInfo)

var orginalPrice= 'price';
computerInfo[orginalPrice] = 70000;
console.log(computerInfo)