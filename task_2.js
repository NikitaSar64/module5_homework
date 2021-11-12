'use strict';

// task 2

let x = 15;

switch (typeof(x)) {
    case 'string':
        console.log(`${x} - это ${typeof(x)}`);
        break;
    case 'number':
        if (Number.isNaN(x)){
            console.log('Тип x не определён');
        } else {
            console.log(`${x} - это ${typeof(x)}`);
        }
        break;
    case 'boolean':
        console.log(`${x} - это ${typeof(x)}`);
        break;
    default:
        console.log('Тип x не определён');
}