var NodeTestModule = require('./nodetestmodule');

console.log(NodeTestModule.getNumber()); // 1
console.log(NodeTestModule.number); // 1

NodeTestModule.addOne(); 

console.log(NodeTestModule.getNumber()); // 2
console.log(NodeTestModule.number);// 1

NodeTestModule.num = 123;
console.log(NodeTestModule.getNumber()); // 2
console.log(NodeTestModule.num); // 123

NodeTestModule.addOne(); 

console.log(NodeTestModule.getNumber()); 
console.log(NodeTestModule.number);// 1
