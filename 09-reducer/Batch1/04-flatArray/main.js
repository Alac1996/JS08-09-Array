let flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const flatArr = flattened.reduce((acc, subArr) => {
  // Walkthrought SubArray
  // each Element of SubArray => push into Acc
  for (let num of subArr) {
    acc.push(num);
  }
  return acc;
}, []);

console.log(flatArr);
