// Assignment # 12
// 
let names = ["Usman", "Umar", "Shahab", "Omair", "Osama"];
for (let i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]}  how are you today`);
}
// for each
names.forEach(name => {
    console.log(`Hi ${name}!  how are you today`);
});
// for of loop
for (const friendName of names) {
    console.log(`Dear ${friendName}!  how are you`);
}
export {};
