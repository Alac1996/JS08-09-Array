const styles = ["jazz", "Blue"];

let r = styles.push("Rock-n-Roll");

styles[1] = "Classic";

delete styles[0];

console.log(styles);
console.log(r);
