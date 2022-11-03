console.log("-----------obj---------------")
let user1 = new Object(); // "object constructor" syntax
let user2 = {};  // "object literal" syntax
let user3 = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30,
    "admin": true        // by key "age" store value 30
};
console.log(user3)
delete user3.age;
console.log(user3)

const user4 = {
    name: "John"
  };
  
user4.name = "Pete"; // (*)
console.log(user4)

user4["like you"] = false;
console.log(user4["like you"]);

let name = "name";
console.log(user4.name)

console.log("-----------------------")
// Thuộc tính tính toán
let gruit = "apple";
let bag = {
    [gruit]: 5
};
// as
// let bag = {};
// bag[gruit] = 5;
console.log(bag.apple)

let bag2 = {
    [gruit + '_banana']: 5
};
console.log(bag2.apple_banana)

console.log("--------------------")
// Thuộc tính gắn gọn(shorthand)
function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...other properties
    };
}
console.log(makeUser("q", 12))
function makeUser1(name, age) {
    return {
      name, // same as name: name
      age,  // same as age: age
      // ...
    };
}
console.log(makeUser1("q", 13))

let user5 = {
    name,  // same as name:name
    age: 30
  };
console.log(user5) 

console.log("-----------exist--------")
let user6 = {};
console.log(user6.name === undefined);
console.log("name" in user6)

// for in
console.log("---------for in-------")
for(let key in user5){
    console.log(user5[key])
}
// https://cafedev.vn/tu-hoc-javascript-sao-chep-doi-tuong-tham-chieu-trong-javascript/