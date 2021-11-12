'use strict';

// task 8

let arr = [0,'hi', 5, 6, 'world', true, false, 8, null];

let newMap = new Map();

arr.forEach(function (elem, index){
    newMap.set(index, elem);
});

console.log(newMap);

for (let name of newMap.keys()){
    console.log(`Ключ - ${name}, значение - ${newMap.get(name)}`);
}
