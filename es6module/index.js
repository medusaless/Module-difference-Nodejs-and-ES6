import * as es6module from './es6module';

console.log(es6module.getNumber());  // 1
console.log(es6module.num);  // 1

es6module.addOne(); 

console.log(es6module.getNumber()); // 2
console.log(es6module.num); // 2

es6module.num = 123;
console.log(es6module.getNumber()); // 2
console.log(es6module.num); // 123


es6module.addOne(); 

console.log(es6module.getNumber()); // 3
console.log(es6module.num); // 3