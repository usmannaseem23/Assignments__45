// Assignment # 43
// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names.
//  Because the original array will be unchanged, return the new array and store it in a separate array.
//  Call show_magicians() with each array to show that you have one array of the original names and
//  one array with the Great added to each magician’s name.

function show_magicians(magicians:string[]) {
    magicians.forEach(name => console.log(name));
        
}
//  function to make magicians great through.map() it will modify
function make_great(magicians:string[]) {
    return magicians.map(name => `The Great ${name}`);
}
// Define an array of magicians names 
let magicians_names = ["Usman" , "Osama" , "Umar"] ;

// Making a copy of original array through .slice();
let copy_magician_names = magicians_names.slice();

// Modify the copied array to includes "The Great" with their names
 let copy_great_magicians = make_great(copy_magician_names);

 // Show both array original and copied


// Original 

console.log("Original Array\n");
 show_magicians(magicians_names);

 //Copied
console.log("\nCopied Array\n");
 show_magicians(copy_great_magicians);


