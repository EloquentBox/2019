var animals = [
    {name: 'Rex', species: 'rabbit'}
    {name: 'Fluff', species: 'dog'}
    {name: 'Onyx', species: 'dog'}
    {name: 'Jack', species: 'fish'}
    {name: 'Jambo' species: 'cat'}
    {name: 'Harold', species: 'fish'}
];

const dogs = animals.filter(function(animal) {
    return animal.species === 'dog';
});

/*  Filter accepts one argument - another function. 
Function sent into another functions are called "callback functions". 
Filter loop through each item in array 
and for each item it's going to pass it into the callback function. 
It expect the callback function to return true/false to tell filter 
is it should be in other array or no. 
It will return new array (filtered) "dogs"

// 

Normal LOOP:

const dogs = [];
for (let i = 0, length = animals.length; i < length ;i++) {
    if(animals[i].species === 'dog') {
    dogs.push(animals[i]);
    }
}


//

THE FUN FACT: IN ES6 we can make it even shorter!

animals.filter(animal => animal.species === 'dog');