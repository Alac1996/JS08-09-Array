const sports = ["football", "volleyball", "tennis", "basketball", "judo"];

function newArr(sports) {
  return sports.slice(1, 3);
}

const portion = newArr(sports);

console.log(portion);
