import { PI, sumOfTwoNumbers, multiplyOfTwoNumbers, divideOfTwoNumbers } from '../modules/1-named-exports.ts'
import { PI as pi, sumOfTwoNumbers as sum } from '../modules/2-export-all.ts';

console.log(PI);
console.log(sumOfTwoNumbers(10, 20));

console.log(pi);
console.log(sum(10, 20));


