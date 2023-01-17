const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let abStr = input[0];

let [carA, carB] = abStr.split(" ");
carA = parseInt(carA);
carB = parseInt(carB);

if (carA === carB) console.log("same");
else if (carA > carB) console.log("A");
else console.log("B");
