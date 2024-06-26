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