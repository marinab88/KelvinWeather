const kelvin=294; // The forecast today is 293Kelvin
let celsius=kelvin-273; //Celsius is 273 degrees less than Kelvin
let Fahrenheit=Math.floor(celsius*(9/5)+32); //Convert from Celsius to Fahrenheit
//Math.floor() round down the Fahrenheit temperature

console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`);