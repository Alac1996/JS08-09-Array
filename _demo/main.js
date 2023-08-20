const log = console.log;

log("learn array");

// Array Literal
// element : สมาชิก
const friends = ["Money", "Non", "Peakpoon", "Fon"];
log(friends);

// Array Constructor
const height = new Array(150, 160, 175);
log(height);

// ## Access, Modify, Add, Delete
// Bracket Notation with Index
log(friends[0]);
log(friends[2]);
log(friends[-1]); //Undefined
log(friends[10]); //Undefined

// Update
friends[0] = "Gold";
log(friends);

friends[1] = "Michael";
log(friends);

// ถ้าพยายามอัพเดทใน index ที่ไม่มีอยู่ === add
// friends[-1] = "Pavit";
// log(friends);

// Add
log(friends[3]);
friends[4] = "Git";
log(friends);

// Delete
delete friends[2];
log(friends);
log(friends[2]);

// ## 3.Basic Property and Method of Array

// <arr>.length
log(friends.length);

// friends[5] = "Mix";
// friends[6] = "Mix";
friends[friends.length] = "Mix"; //
log(friends);
log(friends.length);

// for (let i = 0; i < friends.length - 1; i++) {
//   // 0,1,2,3,4,5 (length = 6)
//   console.log(friends[i]);
// }
// Method CRUD element

const animals = ["Spider", "Cat", "Elephant"];

// Immutable : ไม่เปลี่ยนแปลงค่า (ถ้าจะเปลี่ยนต้องเขียนทับ)
// Mutable : เปลี่ยนแปลงค่าได้

// Method Push ทำให้ Array Mutate ไหม ?  yes (ยาวขึ้น)
// Method Push return อะไรกลับมา
let r = animals.push("Dog");
log(animals);
log(r); // 4

let s = animals.unshift("Snake", "Mountain Bird");
log(animals);
log(s); // 6

let t = animals.pop();
// log(animals);
// log(t); // Dog

// ## 4. Loop

// for Loop

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// for...in (มอง array เป็น object ประเภทหนีึ่งได้
/*
const arr = {
    0 : "Bird",
    1 : "Cat",
    2 : "Dog"
}
*/
// ไม่ต้องกำหนด  i เอง
for (let index in animals) {
  console.log(index, animals[index]);
}

// 4C: for.....of
for (let element of animals) {
  // 1st : element = "Snake"
  // 2nd : element = "Mountain Bird"
  // 3rd : element = "Spider"
  // 4th : element = "Elephant"
  log(element);
}

//  Aside Topic : Higher Order Function
function add(x, y) {
  return x + y;
}
log(add(5, 6));

// Function Expression : FN as a value
const a = console.log;
const b = alert;
a("Hi");
b("Hello");

// สร้าง Function ที่รับ parameter เป็น function

function addAndShow(x, y, showFn) {
  let result = x + y;
  // call showFn
  showFn(`result is : ${result}`);
  return result;
}
function show(result) {
  console.log(result);
}

addAndShow(5, 10, show);

// Main FN : Higher Order Function (ฟังก์ชันที่รับฟังก์ชันเป็น parameter)
// fn1,fn2,fn3 : Callback

// fn1,fn2,fn3 จะถูกรันก็ต่อเมื่อ cook รันเท่านั้น
// fn1,fn2,fn3 (ถูกเรียกทีหลัง : callback)
function cook(fn1, fn2, fn3) {
  fn1();
  fn2();
  fn3();
}

// Sub FN
function step1() {
  log("1.Prepared ingredient");
}

function step2() {
  log("2.cooking");
}

function step3() {
  log("3.serve");
}

// call
cook(step1, step2, step3);

// function addAndShow(x, y, Fn) {
//   let result = x + y;
//   // call showFn
//   Fn(`result is : ${result}`);
//   return result;
// }
// function show(result) {
//   console.log(result);
// }

// addAndShow(5, 10, console.log);

// addAndShow(5, 20, alert);

const items = ["Football", "Bag", "Dish"];

// 4d : forEach
// SYNTAX : <array>.forEach(FN)
// array == Caller
// Higher order FN == forEach (รับพารามิเตอร์เป็น FN)

// items.forEach(function() {})
// Callback จะถูกรันตามจำนวนสมาชิกใน array

// function iterateFn(a) {
//   console.log(a);
// }

// const items = ['Football','Bag','Dish'];
// const iterate = (item) => console.log(item);
// const iterate = (elephant) => console.log(element);
const iterateFn = (item, index, array) => console.log(index, item);

items.forEach(iterateFn);
// 1st Loop : ("Football",0,items) => console.log("Football")
// 2nd Loop : ("Bag",1,items) => console.log("Bag")
// 3rd Loop : ("Dish",3,items) => console.log("Dish")

items.forEach((a, b, c) => {
  //   console.log(a);
  // at index....., element = ....
  console.log(`At index ${b}, element = ${a}`);
});

function myforEach(fn) {
  // code...

  // #2 : fn
  for (let i = 0; i < 5; i++) {
    fn("random");
  }
  //  code...
}

// Caller
myforEach((a) => console.log(a));
