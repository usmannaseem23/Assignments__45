// Assignment # 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size = "Large", printMessage = "I Love TypeScipt") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
// Calling a function with by deafult values
makeShirt();
// Calling a function now with medium size and default message
makeShirt("Medium");
// Calling a function now with small size and also with different message
makeShirt("Small", "I Love Python");
export {};
