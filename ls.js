// // Set , Get , Remove , Clear

// console.log(localStorage);

// localStorage.setItem("tasks","hello")

console.log(localStorage.getItem("tasks"));


// JSON

// stringify , parse

console.log(JSON);

const arr = [1,2,3,4,5];

let arrToString = JSON.stringify(arr);

let stringToArr = JSON.parse(arrToString);




console.log(arr);

// console.log(typeof stringToArr);
// console.log(typeof arrToString);

localStorage.setItem("tasks", arrToString);


