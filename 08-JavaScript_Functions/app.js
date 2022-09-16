function addNums(num1, num2) {
  return num1 + num2
}
addNums(5, 3); // 8


function greet(firstName, lastName) {
  console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}
greet('Nami', 'Saputri'); // Nami S.


// Higher Order Function 
function callTwice(func) {
  func();
  func();
}

function callTenTimes(f) {
  for (let i = 0; i < 10; i++) {
    f()
  }
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1
  console.log(roll);
}

callTenTimes(rollDie);


// Try/Catch 
function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    console.log('Please pass a string next time');
  }
}


// The ForEach Method 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// const print = element => console.log(element)

// numbers.forEach(print)

numbers.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el)
  }
})


const movies = [
  {
    title: 'Amadeus',
    score: 99
  },
  {
    title: 'Stand By Me',
    score: 85
  },
  {
    title: 'Parasite',
    score: 95
  },
  {
    title: 'Alien',
    score: 90
  }
]

// const isMovie = function (movie) {
//   console.log(`${movie.title} - ${movie.score}/100`);
// }
// movies.forEach(isMovie);


movies.forEach(function (movie) {
  console.log(`${movie.title} - ${movie.score}/100`)
})


// The Map Method 
const doubles = numbers.map(function (num) {
  return num * 2;
})
console.log(doubles);

const titles = movies.map(function (movie) {
  return movie.title.toUpperCase();
})
console.log(titles);


// Arrow Function Wrap up
const movieRate = movies.map(movie => (
  console.log(`${movie.title} - ${movie.score}/100`)
));

console.log(movieRate);


// Arrow Function 
const add = (x, y) => {
  return x + y;
}

const square = (num) => {
  return num * num;
}

const rollDice = () => {
  return Math.floor(Math.random() * 6);
}

// Arrow function Implicit return (only single Expression)

const rollDice1 = () => (
  Math.floor(Math.random() * 6)
)

const add1 = (a, b) => a + b;


// setTimeout and setInterval 
console.log('Hello there!');
setTimeout(() => {
  console.log('...are you still there?');
}, 3000)

console.log('Bye Bye !');

const id = setInterval(() => {
  console.log(Math.random());
}, 2000);

// clearInterval(id); // To Stop the Interval
