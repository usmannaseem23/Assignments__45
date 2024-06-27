// Assignment # 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Inside the loop:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let oneNumbers of numbers) {
    let ordinalEnding;
    if (oneNumbers === 1) {
        ordinalEnding = "st";
    }
    else if (oneNumbers === 2) {
        ordinalEnding = "nd";
    }
    else if (oneNumbers === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(`${oneNumbers}${ordinalEnding}`);
}
export {};
