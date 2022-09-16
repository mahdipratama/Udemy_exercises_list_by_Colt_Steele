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



// The Filter Method

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.filter(n => {
  return n < 10
})


const movies1 = [
  {
    title: 'Amadeus',
    score: 99,
    year: 1984
  },
  {
    title: 'Sharknado',
    score: 35,
    year: 2013
  },
  {
    title: '13 Going On 30',
    score: 70,
    year: 2004
  },
  {
    title: 'Stand By Me',
    score: 85,
    year: 1986
  },
  {
    title: 'Waterworld',
    score: 62,
    year: 1995
  },
  {
    title: 'Jingle All The Way',
    score: 71,
    year: 1996
  },
  {
    title: 'Parasite',
    score: 95,
    year: 2019
  },
  {
    title: 'Notting Hill',
    score: 77,
    year: 1999
  },
  {
    title: 'Alien',
    score: 90,
    year: 1979
  }
]


const badMovies = movies.filter(movie => movie.score < 70)

const recentMovies = movies.filter(movie => movie.year > 2000)

// const goodMovies = movies.filter(m => m.score > 80)
// const goodTitles = goodMovies.map(m => m.title)

movies.filter(movie => movie.score > 80).map(movie => movie.title);


// Some & Every Methods
movies.some(movie => movie.year > 2015)


const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

exams.every(score => score >= 75)


// Reduce Methods
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for (let price of prices) {
//     total += price
// }
// console.log(total)

// const total = prices.reduce((total, price) => {
//     return total + price
// })

const total = prices.reduce((total, price) => total + price)

const minPrice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
})

// We can provide an initial value as the 2nd arg to reduce:
const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num) //20
evens.reduce((sum, num) => sum + num, 100) //120


// Arrow Function & 'this'
const person = {
  firstName: 'Viggo',
  lastName: 'Mortensen',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`
  },
  shoutName: function () {
    setTimeout(() => {
      //keyword 'this' in arrow functions refers to the value of 'this' when the function is created
      console.log(this);
      console.log(this.fullName())
    }, 3000)
  }
}