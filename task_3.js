'use strict';

// task 3

// var 1

let str1 = 'hello'.split('').reverse().join('');

console.log(str1);

// var 2

let str = 'hello';
let newStr = '';

for (let i = (str.length - 1); i >= 0; i--){
    //console.log(str[i]);
    newStr = newStr + str[i] ;
}

console.log(newStr);

