// Exercise #1
function isEven(num) {
  //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

isEven(4);

console.log(8 % 2);


// Exercise #2 
function getColor(phrase) {
  if (phrase == 'stop') {
    console.log('red');
  } else if (phrase == 'slow') {
    console.log('yellow');
  } else if (phrase == 'go') {
    console.log('green');
  } else console.log('purple');
}
getColor('slow'); // yellow


// Exercise #3
const num = 102;

if (num <= 100) {
  if (num >= 50) {
    console.log("HEY!");
  }
} else {
  if (num < 103) {
    if (num % 2 === 0) {
      console.log("YOU GOT ME!");
    }
  }
}


// Exercise #4 
const mystery = 'Pilates7';

if (mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1) {
  console.log("YOU GOT IT!!!");
}

console.log()

/////////////////////////
//  Arrays Exercise

// Exercise #1 
// Let's get some practice creating arrays. Please define a variable called lottoNumbers and set it equal to an array containing any 6 numbers.  It's simple, but we've got to start somewhere!

const lottoNumbers = [10, 23, 3, 5, 6, 9];


// Exercise #2 
/* Unfortunately, I misspelled the 2nd name in the leaderBoard array.  I meant to write "Luna" instead of "Lua".  Please update it to "Luna" (without changing line 1)

// Bellatrix has fallen off the leaderBoard and has been replaced by Draco! Please update the last element of the array so that it holds "Draco" instead of "Bellatrix" (once again, please do this without changing line 1)*/

const leaderBoard = ['Harry', 'Lua', 'Hermione', 'Bellatrix'];

leaderBoard[1] = 'Luna';
leaderBoard[3] = 'Draco';



// Exercise #3
/*
Please help me fix the planets array!  Using the array methods we just learned...

--Remove the first element, "The Moon", from the planets array.  The moon is not a  planet!--
--Add in "Saturn" at the very end of the planets array--
--Add "Mercury" as the first element in the planets array--
*/

const planets = ['The Moon', 'Venus', 'Earth', 'Mars', 'Jupiter'];

// YOUR CODE GOES BELOW THIS LINE:
planets.shift();
planets.push('Saturn');
planets.unshift('Mercury');



// Exercise #4
//--Please update the array element that is currently 'null', to instead be "Hugo"

// DO NOT TOUCH!!! (please)
const airplaneSeats = [
  ['Ruth', 'Anthony', 'Stevie'],
  ['Amelia', 'Pedro', 'Maya'],
  ['Xavier', 'Ananya', 'Luis'],
  ['Luke', null, 'Deniz'],
  ['Rin', 'Sakura', 'Francisco']
];

// YOUR CODE GOES BELOW THIS LINE:
airplaneSeats[3].splice(1, 1, 'Hugo');



///////////////////////////////
// Object Literals Exercise 

// Exercise #1 
/*
Please define a new variable called product.  It should be an object literal with the following properties:
--name - set to the string "Gummy Bears"
--inStock - set to the boolean true
--price  - set to the number 1.99
flavors - set to an array of at least three strings like ["grape", "apple", "cherry"]
*/

const product = {
  name: 'Gummy Bears',
  inStock: true,
  price: 1.99,
  flavors: ['Grape', 'apple', 'cherry']
}

// Exercise #2 
/*
In index.js, you'll find a restaurant object that contains a name, address, city, state, and zipcode. 
--Your task to is to create a variable named fullAddress that points to a string using the information from restaurant. 
--fullAddress should point to a string that includes the address, city, state, and zipcode from the restaurant object.
--To make it harder to "cheat" by copy and pasting, I've randomly generated the address portion.    For example, if address was "64 Johnson Ave", the fullAddress variable would look like this:
*/

const restaurant = {
  name: 'Ichiran Ramen',
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: 'Brooklyn',
  state: 'NY',
  zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
let fullAddress = `${restaurant['address']}, ${restaurant['city']}, ${restaurant['state']} ${restaurant['zipcode']}`;



//////////////////////////////////
// Loops Exercise 

// Exercise #1 
// Print out "Da ba dee da ba daa" 6 times, using a for loop
let times = 6;
for (let i = 1; i <= times; i++) {
  console.log('Da ba dee da ba daa')
}

// Exercise #2
// Write a loop that prints:
// 25
// 20
// 15
// 10
// 5
// 0
for (let i = 25; i >= 0; i -= 5) {
  console.log(i)
}

// Exercise 3
// Loop over the people array with a for loop, printing out each name in uppercase letters.

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase())
}