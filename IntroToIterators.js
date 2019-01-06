const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
}); // forEach - taking every single element from 'artist' array and log in into console + string
    // Picasso is one of my favorite artists

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
}); // Map is taking every element from numbers and use it as an argument for (in this case) return
// 1, 4, 9, 16,25 
console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
}); // Like in previous HighOrderFunArray.js: 
/*  Filter accepts one argument - another function. 
Function sent into another functions are called "callback functions". 
Filter loop through each item in array 
and for each item it's going to pass it into the callback function. 
It expect the callback function to return true/false to tell filter 
is it should be in other array or no. 
It will return new array (filtered) "onlyNumbers"
// 
 */
console.log(onlyNumbers);


