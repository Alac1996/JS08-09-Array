// 1.
// const array = [1, 2, 30, 400];

// const newArr = array.map((x) => {
//   const a = 2 * x;
//   return a;
// });

// console.log(newArr);

// 2.
// const array = [1, 2, 3, 4];

// const newArr = array.map((a) => {
//   return a + "";
// });

// console.log(newArr);

// 3.
// const array = [1, "1", 2, {}];

// const newArr = array.map((a) => {
//   return typeof a;
// });

// console.log(newArr);

// 4.
// const array = ["apple", "banana", "orange"];

// const newArr = array.map((a) => {
//   return a.toUpperCase();
// });

// console.log(newArr);

// 5.
// const array = [1, 3, 4, 5, 6, 7, 8];

// const newArr = array.map((a) => {
//   // let res;
//   if (a % 2 === 0) {
//     return "even";
//   }
//   return "odd";
//   // return res;
// });

// console.log(newArr);

// 6.
// const array = [1, -3, 2, 8, -4, 5];

// const newArr = array.map((a) => {
//   return Math.abs(a);
// });
// console.log(newArr);

// 7.
// const array = [100, 200.25, 300.84, 400.3];

// const newArr = array.map((a) => {
//   return a.toFixed(2) + "";
// });

// console.log(newArr);

// 8.
// const array = [0, 5, 10, 7, 6, 5, 0];

// const Months = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];

// const newArr = array.map((a) => {
//   return Months[a];
// });

// console.log(newArr);

// 9.
// const array = [1, 16, 81, 256, 625, 1296];
// const newArr = array.map((n) => Math.sqrt(Math.sqrt(n)));
// console.log(newArr);

// 10.
// const array = [
//   { name: "apple", age: 14 },
//   { name: "banana", age: 18 },
//   { name: "watermelon", age: 32 },
// ];

// const newArr = array.map((item) => item.name);
// console.log(newArr);

// 11.
// const array = [
//   { name: "apple", age: 14 },
//   { name: "banana", age: 18 },
//   { name: "watermelon", age: 32 },
// ];

// const newArr = array.map((item) => item.age);
// console.log(newArr);

// 12.
// const array = [
//   { name: "apple", surname: "London" },
//   { name: "banana", surname: "Bangkok" },
//   { name: "watermelon", surname: "Singapore" },
// ];

// const newArr = array.map((prop) => `${prop.name} ${prop.surname}`);
// console.log(newArr);

// 13.
const array = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-01" },
  { name: "watermelon", birth: "1985-12-01" },
];
