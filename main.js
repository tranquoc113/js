// Hàm mũi tên let func = (arg1, arg2, ...argN) => expression
// -> một cú pháp rất đơn giản và ngắn gọn khác để tạo các hàm
// là bản ngắn gọn của
// let func = function(arg1, arg2, ...argN) {
//     return expression;
//   };

let sum = (a, b) => a + b;
let double = n => n * 2;

console.log(sum(1,2))
console.log(double(2))

let sayHi = () => alert("Hello!");
// sayHi()

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");

// welcome();

let sum1 = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  
console.log(sum1(1,2))

//
