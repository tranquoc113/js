console.log("-----------obj---------------")
let user1 = new Object(); // "object constructor" syntax
let user2 = {};  // "object literal" syntax
let user3 = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30,
    "admin": true        // by key "age" store value 30
};
delete user3.age;

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

// clone, merging, Object.assign
let a = {};
let b = a;
console.log(a==b) //true
console.log(a===b) //true

let a1 = {};
let b1 = {};
console.log(a==b) //false

let user7 = {
  name:"Q",
  age: 28
}
let clone = {};
for (let key in user7){ // có thể dùng asign để sao chép thay vì for
  clone[key] = user7[key]; // clone = Object.asign({}, user7)
}
//or Object.assign(dest, [src1, src2, src3...]) Sao chép đối tất cả thuộc tính của đối tượng nguồn vào dest
let user8 = {canView:true};
let user9 = {canEdit:true};
console.log(Object.assign(user7, user8,user9)); // {name: "Q",age:28, canView: true, canEdit:true}

// method of object and this

user7.sayHi = () => console.log("Hello");
user7.sayHi()
// or
user7 = {
  sayHi: function(){
    console.log("heloo")
  },
  //or
  sayHi1(){
    console.log("hello1")
  }
}

// constructor, new
function User(name){
  this.name = name;
  this.isAdmin = false;
}
let userc = new User("Jack"); // Cho phép tạo nhiều đối tượng


//Array
// find tìm kiếm đối tượng với điều kiện cụ thể
// [].find(function(item, index, array){});
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1); //user.name=John

// filter nếu find trả về đối tượng thì filter trả về mảng
// map hàm cho từng phần tử của ảng và trả về mảng kết quả
[1,2,3].map(item => item*2);

// reduce/reduceRight sử dụng để tính toán một gía trị duy nhất dựa trên mảng
// let value = arr.reduce(function(accumulator, item, index, array) {
//   // ...
// }, [initial]);
// accumulator– là kết quả của lệnh gọi hàm trước, bằng initiallần đầu tiên (nếu initialđược cung cấp).
// item – là phần tử mảng hiện tại.
[1,2,3,4,5].reduce((sum, current) => sum + current, 0)


// Iterables
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};
Array.from(arrayLike); 


// Map https://cafedev.vn/tu-hoc-javascript-map-and-set-trong-javascript/
// như object nhưng cho phép các kiểu key khác nhau
let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key
map.set(user9,123)

// từ object sang array và ngược lại

// Set mỗi giá trị chỉ xuất hiện 1 lần
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
//John (then Pete and Mary)


// Phân rã giá trị
// let {prop : varName = default, ...rest} = object
let arr = ["Ilya", "Kantor", "Quoc"]
let [firstName, surname] = arr;
// let [firstName, surname] = "Ilya Kantor".split(' ');
// Các phần tử không mong muốn của mảng cũng có thể được loại bỏ thông qua dấu phẩy thừa:
let [fistName1,,myName] = arr;
let [first1,firt2,first3]="abc";
let user10 = {};
[user10.name, user.lastName] = "Tran Quoc".split(" ");
let [x = "X", y = "Y"] = ["XX"] // x = XX

// phần rã đối tượng
// let {var1, var2} = {var1:…, var2:…}
let options = {
  title: "Menu",
  width: 100,
  height: 200,
  items: ["a","b"]
};

let {title, width, height} = options;
// let {width: w, height: h, title} = options;
let {title:t, ...rest} = options;
// rest.height, rest.width

// Vấn đề function
// showMenu("title", undefined, undefined, ["a","b"])
function showMenu({title="Default", width:w, height, items=[]}){};
showMenu(options);


//Json, toJSon, JSON.stringify, JSON.parse, reviver
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});
