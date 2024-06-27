// Assignment # 45

// Cars: Write a function that stores information about a car in a Object.
//  The function should always receive a manufacturer and a model name.
//  It should then accept an arbitrary number of keyword arguments. Call the function with the required information and
//  two other name-value pairs, such as a color or an optional feature.
//  Print the Object that’s returned to make sure all the information was stored correctly

function create_car(manufacturer, model , ...optional) {

    // Initialize a car object with manufacturer and model
    let car = {
        manufacturer : manufacturer,
        model : model,
    };
    // Add the rest of the arguments to the car object
    optional.forEach(option=>{
        let [key , value] = option.split(":");
        car[key.trim()] = value.trim();
    })

    return car;
}

// Calling the function to create a car object
let my_car = create_car("Toyoto","Corolla" ,"color:Black" ,"Sunroof:true" ,"Year:2024" )

// Print the message

console.log(my_car);