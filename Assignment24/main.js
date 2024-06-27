// Assignment # 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings
const strings1 = "hello";
const strings2 = "world";
console.log(strings1 === strings2); //false
console.log(strings1 !== strings2); //true
// • Tests using the lower case function
const uppercase = "HELLO";
const lowerCase = "hello";
console.log(uppercase.toLowerCase() === lowerCase.toLowerCase()); //treu
// Numerical tests involving equality and inequality,
//  greater than and less than, greater than or equal to, and less than or equal to
const num1 = 10;
const num2 = 20;
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 > num2); //false
console.log(num1 < num2); //true
console.log(num1 >= num2); //false
console.log(num1 <= num2); //true
// Tests using "and" and "or" operators 
const x = 10;
const y = 20;
const z = 30;
console.log(x < y && y < z); //true
console.log(x > y || y < z); //true
// Test whether an item is in a array
const array1 = [1, 2, 3, 4, 5, 6];
const items = 3;
console.log(array1.indexOf(items) !== -1); //true
// Test whether an item is in a array
console.log(array1.indexOf(10) === -1); //true
export {};
