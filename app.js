// 1)
const num = 266219;
// 2)
const newNum = num.toString().split('').map(item => +item).reduce((a, b) => a * b);
console.log(newNum);
// 3)
const pow3 = newNum ** 3;
console.log(pow3);
console.log((pow3).toString().split('').map(item => parseInt(item)).slice(0, 2).join(''));
