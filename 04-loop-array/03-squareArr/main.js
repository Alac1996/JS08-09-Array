const arr = [2, 3, 5, 7, 11];

function squareArr(arr) {
  arr.forEach((a, b) => (arr[b] = a ** 2));
  console.log(arr);
}
squareArr(arr);

// squareArr
// (array) => original Array (modified)
// (array) => new Array

/*
const arr = [2,3,5,7,11];
const newArr = [];

for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
  newArr.push(arr[i] ** 2);
}

console.log(newArr);
*/

function squareArr() {
  // start Reuse Logic
  const newArr = []; // len = 5
  for (let i = 0; i < arr.length; i++) {
    newArr.push(array[i] ** 2);
  }
  // console.log(newArr)
  return newArr;
  // End Reuse Logic
}
let newArray = squareArr(arr);

console.log(newArray);
console.log(arr);
