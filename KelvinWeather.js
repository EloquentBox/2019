/* Deep in his mountain-side meteorology lab, the mad scientist 
Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. 
However there's a problem: 
All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let's convert Kelvin to Celsius, 
then to Fahrenheit.

For example, 283 K converts to 10 °C which converts to 50 °F.*/ 


//Today's forecast is 293 kelvin's degree

const kelvin = 0; 

//Celsius degree = kelvin's - 273;

const celsius = kelvin - 273;

/* Calculating Fahrenheit degree
 Round down Fahrenheit temperature because it can be decimal number */

let Fahrenheit = Math.floor(celsius * (9/5) + 32);

// In newton scale 1 newton = 1/3 celsius degree.

const newton = Math.floor(celsius * (33/100));

console.log(`The tempearature is ${Fahrenheit} degrees Fahrenheit`);

console.log(`The temperature is ${newton} degrees Newton`);


