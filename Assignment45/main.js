// Assignment # 45
// Cars: Write a function that stores information about a car in a Object.
//  The function should always receive a manufacturer and a model name.
//  It should then accept an arbitrary number of keyword arguments. Call the function with the required information and
//  two other name-value pairs, such as a color or an optional feature.
//  Print the Object that’s returned to make sure all the information was stored correctly
function create_car(manufacturer, model) {
    var optional = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        optional[_i - 2] = arguments[_i];
    }
    // Initialize a car object with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Add the rest of the arguments to the car object
    optional.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// Calling the function to create a car object
var my_car = create_car("Toyoto", "Corolla", "color:Black", "Sunroof:true", "Year:2024");
// Print the message
console.log(my_car);
