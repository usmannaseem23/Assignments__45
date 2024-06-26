// Assignment # 17
// print message
console.log("Unfortunately ! the new dinner table wont aarrive so we can invited only 2 guest");
let guestlist = ["Usman", "Umar", "Ali"];
guestlist.unshift("Anas", "Omair");
// Print message a Updted list
console.log("Updated List of Guest", guestlist);
// remove guest from the list
while (guestlist.length > 2) {
    let removeguest = guestlist.pop();
    if (removeguest !== undefined) {
        console.log(`Sorry ${removeguest}, you cant invite them to dinner`);
    }
}
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you are both are you invited to dinner`);
});
// removes 2 names from the list  
guestlist.splice(0, guestlist.length);
// print a message updatedemptylist
console.log("updated list of guest", guestlist);
export {};
