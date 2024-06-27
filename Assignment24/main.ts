// Assignment # 24


// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// Tests for equality and inequality with strings
const strings1 : string = "hello";
const strings2 : string = "world";

console.log(strings1 === strings2);//false

console.log(strings1 !== strings2); //true
// • Tests using the lower case function

const uppercase : string = "HELLO";
const lowerCase : string = "hello";

console.log(uppercase.toLowerCase() === lowerCase.toLowerCase()); //treu
        

// Numerical tests involving equality and inequality,
//  greater than and less than, greater than or equal to, and less than or equal to

const num1 : number = 10;
const num2 : number = 20;

console.log(num1 === num2); //false
console.log( num1!== num2); //true

console.log(num1 > num2); //false
console.log(num1 < num2); //true

console.log(num1 >= num2); //false
console.log(num1 <= num2); //true

// Tests using "and" and "or" operators 
const x : number = 10;

const y : number = 20;

const z : number = 30;

console.log(x < y  &&  y < z); //true

console.log(x > y  ||  y < z); //true

// Test whether an item is in a array
const array1 :number[] = [ 1, 2, 3, 4, 5, 6];
const items : number = 3;
console.log(array1.indexOf(items) !== -1); //true

// Test whether an item is in a array
console.log(array1.indexOf(10) === -1); //true









