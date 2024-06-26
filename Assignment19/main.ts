//Assignment # 19


// Assignment # 14


let guestList:string[]=["Usman","Umar","Osama"];

// Invite each for dinner

guestList.forEach(guest => {

    console.log(`Dear ${guest} , You are cordially invited to dinner` );
     
});
// Assignment # 15

// Example # 14

let guestLists :string[] =["Usman","Umar","Ali"];

// print the name who cant make dinner

let unableAttend:string=guestLists.splice(1,1)[0];

console.log(`${unableAttend} not invited for dinner`);


// push

guestLists.push("Osama");

// print a message

guestLists.forEach(guests => {
    console.log(`Dear ${guests} you are cordially invited`);
    
});

//Assignment # 16


let  Guestlist:string[]=["Usman" , "Umar" , "Ali"] ;
console.log("Graet News ! We found a biiger table");
// Unshift
Guestlist.unshift("Omair");

// Splice
Guestlist.splice(Math.floor(Guestlist.length/2), 0,"Naseem");

// push

Guestlist.push("Mohammed");

console.log(Guestlist);

Guestlist.forEach(guest => {
     console.log(`Dear ${guest}, you are all cordially invited to dinner`);

    
});

// Assignment # 17


// print message
console.log("Unfortunately ! the new dinner table wont aarrive so we can invited only 2 guest" );


let guestlist:string[]=["Usman","Umar", "Ali"];

guestlist.unshift("Anas" ,"Omair");

// Print message a Updted list
console.log("Updated List of Guest",guestlist);

// remove guest from the list

while (guestlist.length>2) {
    let removeguest:string|undefined=guestlist.pop();
    if (removeguest !== undefined) {
        console.log(`Sorry ${removeguest}, you cant invite them to dinner`);
        
        
    }
    
}
// • Print a message to each of the two people still on your list, letting them know they’re still invited.

guestlist.forEach(guest =>{
    console.log(`Dear ${guest}, you are both are you invited to dinner`);    
}

) 
// removes 2 names from the list  
guestlist.splice(0,guestlist.length);

// print a message updatedemptylist

console.log("updated list of guest",guestlist);


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



























