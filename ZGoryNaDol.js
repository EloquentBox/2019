let add = function(a, b) {
    return a + b;
};

add(3, 4);

/*

let FUNCTION NAME = function(PARAMETERS) { << bracket is a DEFINITION
    FUNCTION BODY
}

FUNCTION NAME(ARGUMENTS); <<< INVOCATION/CALL-TIME

*/

let add2 = function(a,b) {
    return a + b;
};

add2(3,4,5); // 7
add2(4,10,3); // 14 but if we wanna F.E. 13 we have to change function for that one:

/* let add2 = function (a,b,c) {
    return b + c;
};

*/

let add3 = function(a, b) {
    console.log(arguments); // <<< IT LOGS ARGUMENTS WHICH YOU WILL GIVE - IN THIS CASE [3, 5, 10]
        return a + b;
};

add3(3, 10, 5); // 13

// When we dont know how many arguments are there use ARGUMENTS keyword - it takes all arguments and it's like-a array object

/*
let add3 = function(a,b) {
    console.log(arguments);
        return a + b + arguments[2]; //<< because its third number in our list
};

add3(3, 10, 5); // 18 

*/
// WHEN you want to add all arguments:

let add4 = function (a,b) {
    results = 0;
    for(let i = 0; i < arguments.length; i++) {
        results += arguments[i];
    }
    return results;
}

add4(3,2,4,56,1,23,56,12);


// <<< LOOPING >>>

function animalMaker(name) {
    return {                //RETURNING AN OBJECT
        speak: function() {
            console.log(`my name is ${name}`);
        }
        name: name,
        owner: 'Bianca'
    };
};

const animalNames = ['Sheep', 'Liger', 'Big Bird'];

let myAnimal = animalMaker('Cheetah'); // Create animal object

myAnimal.speak(); // << THERE is a function so use () and then this function will be INVOCATED.

// Loop thourgh this animal names and make an object:

let farm = [];

for(let i = 0; i < animalNames.length; i++) { // SO if we have array and wanna do something with all elements we have to use this 
    farm[i] = animalMaker(animalNames[i]); // HERE we add to farm every element separateley (i=0,i=1...) and every element is going through ANIMALMAKER separately
    farm[i].speak();
};


//<<<<Exercises>>>>

// Write a function, AnimalTestUser, that has one string parameter, 
//username. It returns an object with a username property.

//In your AnimalTestUser function, create a check that sees how many arguments are passed.
// If there is more than one argument, create a property, otherArgs that is an array of the remaining arguments. 
// Note: the arguments keyword is not a true array. Remember, it is an array-like object.

/* <<< MY VERSION

let AnimalTestUser = function(username) {
    
    let args = arguments.length;
    let otherArgs = [];
    console.log(args);
    if(args > 1) {
        for(i = 0; i < args.length; i++) {
            return {
                otherArgs.push(args[i]);
            };
        };
        return {
        username: username,
        otherArgs: otherArgs
    };
    };
};
 */

 // <<< RIGHT VERSION

let AnimalTest = function(username) {
    return {
        username: username
    };
};

let myCow = AnimalTest('Bessy');

 function AnimalTestUser(username) {
     let args = arguments.length;
     let otherArgs = [];
     if (args > 1) {
         for (let i = 0; i < args; i++) {
             otherArgs.push(arguments[i]);
         }
     }

     return {
         username: username,
         otherArgs: otherArgs
     };
 }

 let testSheep = AnimalTestUser('CottonBall', {'loves dancing'}: true);
 console.log(testSheep);



//Write a constructor function, AnimalCreator that returns a single animal object. 
//The constructor function has 4 parameters: username, species, tagline, and noises. 
//The animal object should have at least 5 properties: username, species, noises, tagline, and friends. 
//The values should all be strings except noises and friends, which are arrays.

let AnimalCreator = function (username, species, tagline, noises) {
    return {
        username: username,
        species: species,
        tagline: tagline,
        noises: noises,
        friends: []
    };
    
};

let sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
console.log(sheep);







// Write a function, addFriend that takes an animal 
//object (like the one returned from the AnimalCreator function) and adds another animal object as a friend

// Change your addFriend function to only add the username of the friend, not the whole object.

// <<< right way
function addFriend(animal, friend) {
    animal.friend.push(friend.username);

}

let cow = AnimalCreator('Big', 'cow', 'milkyWay', ['Demo', 'Demo2']);
console.log(cow);

let llama = AnimalCreator('LongSleeve', 'llama', 'WarmAndNice', ['WooT', 'LookThere', 'DoesntMatter']);
console.log(llama);

addFriend(sheep,cow);
addFriend(sheep, llama);


// Create a myFarm collection of at least 3 animal objects. Give them some friends using addFriend, too!

let myFarm = [sheep, cow, llama];

addFriend(cow, sheep);

addFriend(llama, cow);


// Create a function, addMatchesArray, that takes a farm (array of animal objects) 
// and adds a new property to each animal object called matches that is an empty array. Hint: you will need a loop.

function addMatchesArray(farm) {
    for (let animal in farm) {
        farm[animal].matches = [];
    }
}

addMatchesArray(myFarm);
console.log(myFarm[0]);


// Create a function, giveMatches, that takes a farm collection (aka an array of animal objects) that already has 
//a matches property. It selects a name from the friends array and adds it to the matches array. 
//You can choose how the selection is made (random, the first element, etc). Make sure all your 
//animal objects have friends.

function giveMAtches(farm) {
    for(let animal in farm) {
        farm[animal].matches.push(farm[animal].friends[0]);
    }
}

giveMAtches(myFarm);
console.log(myFarm[0]);







