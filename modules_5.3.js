'use strict';

// task 1

// let number = +prompt('Введите число');

// if (typeof(number) === 'number'){
//     number %= 2;
//     if((number) == 0){
//         console.log('Число четное');
//     } else if (number > 0){
//         console.log('Число нечетное');
//     } else if (Number.isNaN(number)){
//         console.log('Упс, вы ошиблись');
//     }
// } 

// task 2

// let x = 15;

// switch (typeof(x)) {
//     case 'string':
//         console.log(`${x} - это ${typeof(x)}`);
//         break;
//     case 'number':
//         if (Number.isNaN(x)){
//             console.log('Тип x не определён');
//         } else {
//             console.log(`${x} - это ${typeof(x)}`);
//         }
//         break;
//     case 'boolean':
//         console.log(`${x} - это ${typeof(x)}`);
//         break;
//     default:
//         console.log('Тип x не определён');
// }

// task 3

// var 1

// let str = 'hello'.split('').reverse().join('');

// var 2

// let str = 'hello';
// let newStr = '';

// for (let i = (str.length - 1); i >= 0; i--){
//     console.log(str[i]);
//     newStr = newStr + str[i] ;
// }

// console.log(newStr);

// console.log(str);

// task 4

// let x = Math.floor((Math.random() * 100));

// console.log(x);

// task 5

// let arr = ['hi', 5, 6, 'world', true, false];

// console.log(`Кол-во элементов в массиве - ${arr.length}`);

// arr.forEach(elem => console.log(elem));

// task 6

//let arr = ['hi', 5, 6, 'world', true, false];
//let arr = [1, 1, 1, 1, 1, 1, 1, 1];

// let check;

// for (let i = 0; i < arr.length; i++) {
//     let j = i + 1;
    
//     for (; j < arr.length; j++) {
//             if(arr[i] == arr[j]){
//                 //console.log(`${arr[i]} равен ${arr[j]}`);
//                 check = true;
                
//             } else {
//                 //console.log(`${arr[i]} не равен ${arr[j]}`);
//                 check = false;
//                 break;
//             } 
//     }
//     if (check == false){
//         //console.log('массив не содержит одинаковых элементов');
//         break;
//     } 
// }

// console.log(check);

// task 7

// let arr = [0,'hi', 5, 6, 'world', true, false, 8, null];
// let arr = [1, 1, 1, 1, 1, 1, 1, 1];

// let oddNumber = 0;
// let evenNumber = 0;
// let numberOfZeros = 0;

// for (let index = 0; index < arr.length; index++) {
//     if (((arr[index] % 2) == 0) && (typeof(arr[index]) == 'number') && (arr[index] != 0)){
//         //console.log(`число ${arr[index]} - четное`);
//         evenNumber += 1;
//     } else if (((arr[index] % 2) > 0) && (typeof(arr[index]) == 'number') && (arr[index] != 0)){
//         //console.log(`число ${arr[index]} - нечетное`);
//         oddNumber += 1;
//     } else if (arr[index] == 0 && (typeof(arr[index]) == 'number')){
//         //console.log(`число ${arr[index]} - 0`);
//         numberOfZeros += 1;
//     }

// }

// console.log(`Кол-во четных чисел в массиве ${evenNumber}`);
// console.log(`Кол-во нечетных чисел в массиве ${oddNumber}`);
// console.log(`Кол-во 0 в массиве ${numberOfZeros}`);

// task 8

// let arr = [0,'hi', 5, 6, 'world', true, false, 8, null];

// let newMap = new Map();

// arr.forEach(function (elem, index){
//     newMap.set(index, elem);
// });

// console.log(newMap);

// for (let name of newMap.keys()){
//     console.log(`Ключ - ${name}, значение - ${newMap.get(name)}`);
// }
