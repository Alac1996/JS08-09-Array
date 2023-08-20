const scores = [
  { score: 90, subject: "HTML", weight: 0.2 },
  { score: 95, subject: "CSS", weight: 0.3 },
  { score: 85, subject: "JavaScript", weight: 0.5 },
];

// function calscore(scores) {
//   const average = scores.reduce((acc, item) => {
//     acc += item.score * item.weight;
//     return acc;
//   }, 0);

//   const sumweight = scores.reduce((acc, item) => {
//     acc += item.weight;
//     return acc;
//   }, 0);

//   return average / sumweight;
// }

// console.log(calscore(scores));

const result = scores.reduce((acc, item, index, arr) => {
  const w = arr.reduce((a, i) => i.weight + a, 0);
  return (acc += item.score * item.weight) / w;
}, 0);
console.log(result);
