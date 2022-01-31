// 1. variable 
var favoriteBook = 'hatekolome java script';

// 2. array
var bookList = ['full stack', 'hablu', 'hate kolome javascript'];


console.log(bookList);
bookList[1] = 'ict';
console.log(bookList);
bookList.push('programing er choddo gusti');
console.log(bookList);
bookList.pop();
console.log(bookList);
bookList.unshift('programing er choddo gusti');
console.log(bookList);
bookList.shift();
console.log(bookList);

// 3. conditional
if(bookList[1] == 'ict'){
    console.log('Amake ict Book Dew');
}else{
    console.log('Amake ict book diyo na');
};
// 4. loop

// while loop
var i = 0;
while(i < 10){
    console.log(i);
    i++;
};
// for loop

for(var i = 0; i < 10; i++){
    console.log(i);
};