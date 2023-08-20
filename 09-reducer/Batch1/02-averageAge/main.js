let john = { name: "John", age: 27 };
let jo = { name: "Jo", age: 21 };
let jin = { name: "Jin", age: 25 };

let arr = [john, jo, jin];

function getAverageAge(arr) {
  let sums = arr.reduce((acc, item) => {
    acc += item.age;
    return acc;
  }, 0);

  return sums / arr.length;
}
console.log(arr.length);
console.log(getAverageAge(arr));
