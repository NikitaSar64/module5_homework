'use strict';

// task 1

let number = +prompt('Введите число');

if (typeof(number) === 'number'){
    number %= 2;
    if((number) == 0){
        console.log('Число четное');
    } else if (number > 0){
        console.log('Число нечетное');
    } else if (Number.isNaN(number)){
        console.log('Упс, вы ошиблись');
    }
} 
