// Assignment # 39
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_Country(city, country) {
    return `${city} , ${country}`;
}
// calling a function and print the returned value
console.log(city_Country("Lahore", "Pakistan"));
console.log(city_Country("Tokyo", "Japan"));
console.log(city_Country("Berlin", "Germany"));
export {};
