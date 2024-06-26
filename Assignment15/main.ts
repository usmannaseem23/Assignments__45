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








