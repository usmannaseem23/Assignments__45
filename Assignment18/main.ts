//Assignment # 18


let placeTovisit:string[]=["new york","paris","thiland","china","italy"];


// print message original order

console.log("Original Order" ,placeTovisit);

// Print your array in alphabetical order without modifying the actual list


console.log(" Alphabetical Order:",placeTovisit.slice().sort());

// • Show that your array is still in its original order by printing it.

console.log("Original Order" ,placeTovisit);

// Print your array in reverse alphabetical order without changing the order of the original list.

console.log("Reverse Alphabetical Order:",placeTovisit.slice().sort().reverse());

// Show that your array is still in its original order by printing it again.

console.log("Original Order" ,placeTovisit);

// Reverse the order of your list. Print the array to show that its order has changed.

placeTovisit.reverse();
console.log("Reverse Order Change",placeTovisit);

//  Reverse the order of your list again. Print the list to show it’s back to its original order.


console.log("Original Order ",placeTovisit.sort());
console.log(placeTovisit);



// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log(" Reverse Alphabetical Order Change",placeTovisit.sort().reverse());
console.log(placeTovisit);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log("Reverse Alphabetical Order Change",placeTovisit.sort().reverse());
console.log(placeTovisit);



























