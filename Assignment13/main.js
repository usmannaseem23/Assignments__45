// Assignment # 13
let transportationMode = ["Car", "Motorcycle", "Bucycle", "Bus"];
// for loop
for (let i = 0; i < transportationMode.length; i++) {
    console.log(`I would like to own a ${transportationMode[i]}`);
}
// for each
transportationMode.forEach(elements => {
    console.log(`I would like to own a ${elements}`);
});
// for of loop
for (let elements of transportationMode) {
    console.log(`I would like to own a ${elements}`);
}
export {};
