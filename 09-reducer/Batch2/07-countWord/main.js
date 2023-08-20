let names = ["Jack", "John", "Bill", "John", "Rick", "Bill", "John"];

const initObj = {};

function reducerFn(acc, name, index, arr) {
  // acc === {'Jack'}
  // - ยังไม่มีชื่อใน object => เพิ่มชื่อเป็น key และ value เป็น 1
  // - มีชื่อใน obj อยู่แล้ว => update value เพิ่มขึ้น 1

  // acc['Jack'] === acc[name]
  //   if (!acc[name]) {
  //     acc[name] = 1;
  //   } else {
  //     acc[name]++;
  //   }
  if (!acc[name]) acc[name] = 0;
  acc[name]++;
  return acc;
}

const r = names.reduce(reducerFn, initObj);
console.log(r);
