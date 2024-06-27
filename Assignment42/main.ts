// Assignment # 42

// Great Magicians: Start with a copy of your program from Exercise 41. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.

function show_magicians(magicians:string[]) {
    magicians.forEach(name => console.log(name));
    
    
}
//  function to make magicians great through.map() it will modify
function make_great(magicians:string[]) {
    return magicians.map(name => `The Great ${name}`);
}
// Define an array of magicians names 
let magicians_names = ["Usman" , "Osama" , "Umar"] ;

// call make_great function to modify magicians names
let great_Magicians = make_great(magicians_names);
console.log(great_Magicians);

//Call show_magicians that show modified list of magicians
show_magicians(great_Magicians);
