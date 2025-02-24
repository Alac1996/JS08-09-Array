const summary = [{ netPrice: 900 }, { netPrice: 475 }, { netPrice: 100 }];

const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 },
];
//   sales = [obj1, obj2, obj3]

// Walkthrough Array (loop)
const newArr = [];
// #1st Layer : Walkthrough Array (loop)
for (let productObj of sales) {
  // each item = Object
  // access Object => dot, bracket
  let price = productObj.price;
  let discount = productObj.discount;
  let netPrice = price;
  if (discount) {
    netPrice = price * (1 - discount);
  }
  const newObj = { netPrice: netPrice };
  newArr.push(newObj);
  //   console.log(newObj);
}

console.log(newArr);
console.log(sales);

/*
const newArr = [];

// obj = {price: 1000, discount: 0.1}
sales.forEach((obj) => {
    // calc NetPrice
    let netPrice = obj.price * (1 -  (obj.discount || 0));
    newArr.push({netPrice});
});

sales.forEach(obj => newArr.push({newPrice: obj.price * (1-(obj.discount || 0))}));
console.log(sales);
console.log(newArr);
*/
