'use strict';

// task 6

let arr = ['hi', 5, 6, 'world', true, false];
//let arr = [1, 1, 1, 1, 1, 1, 1, 1];

let check;

for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    
    for (; j < arr.length; j++) {
            if(arr[i] == arr[j]){
                //console.log(`${arr[i]} равен ${arr[j]}`);
                check = true;
                
            } else {
                //console.log(`${arr[i]} не равен ${arr[j]}`);
                check = false;
                break;
            } 
    }
    if (check == false){
        //console.log('массив не содержит одинаковых элементов');
        break;
    } 
}

console.log(check);
