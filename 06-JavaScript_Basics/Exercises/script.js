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