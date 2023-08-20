function clone(arr) {
  return arr.slice();
}

const originalArray = [1, 2, 3, 4, 5];
const clonedAraay = clone(originalArray);

console.log(clonedAraay);
