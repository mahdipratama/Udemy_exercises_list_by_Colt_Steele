
/*
Heart Function Exercise
=======================
--Define a function called printHeart that prints out the string "<3"
--Execute your function once
*/
// Write your function here:
function printHeart() {
  console.log('<3')
}

printHeart();

/*
Rant Function Exercise
=======================
--Define a function called rant which accepts a string argument called message.  The function should print out an uppercased version of message 3 times (with 3 separate calls to console.log).  For example, rant("I hate beets") should print out:

I HATE BEETS
I HATE BEETS
I HATE BEETS
*/

function rant(message) {
  console.log(message.toUpperCase())
  console.log(message.toUpperCase())
  console.log(message.toUpperCase())
}
rant('I HATE BEETS');



/*
Multiple Args Exercise
=======================
Please write a function called isSnakeEyes, which accepts two numbers as inputs, representing two dice.  If the two numbers are both 1's, please print "Snake Eyes!" otherwise print "Not Snake Eyes!"

-isSnakeEyes(1,1) //Snake Eyes!
-isSnakeEyes(1,5) //Not Snake Eyes!
-isSnakeEyes(4,5) //Not Snake Eyes!
*/

function isSnakeEyes(snake, eyes) {
  if (snake === 1 && eyes === 1) {
    return ('Snake Eyes!')
  } else {
    return ('Not Snake Eyes!')
  }
}

console.log(isSnakeEyes(1, 1)); // Snake Eyes!



/*
Return Value Practice
=======================
Write a simple function multiply which accepts two numerical arguments and returns their product (multiply them together).  Make sure to return the value instead of printing it!

multiply(2,3) // 6
multiply(9,9) // 81
multiply(5,4) // 20
*/

function multiply(x, y) {
  return x * y
}
multiply(2, 3);
multiply(9, 9);
multiply(5, 4);


/*
isShortsWeather Function
=======================
Decide by writing me a function called isShortsWeather. 

It should accept a single number argument, which we will call temperature(but you can name it whatever you want, of course). 

If temperature is greater than or equal to 75, return true. 

Otherwise, return false.   

This exercise assumes temperature is in Fahrenheit.  I apologize to all my Celsius-using students!

isShortsWeather(80) //true
isShortsWeather(48) //false
isShortsWeather(75) //true
*/

function isShortsWeather(temperature) {
  if (temperature >= 75) {
    return true;
  } else {
    return false;
  }
}
isShortsWeather(80)
isShortsWeather(48)
isShortsWeather(75)


/*
Last Element Exercise
=======================
Please write a function called lastElement which accepts a single array argument.  The function should return the last element of the array (without removing the element).  If the array is empty, the function should return null.

-lastElement([3,5,7]) //7
-lastElement([1]) //1
-lastElement([]) //null
*/

function lastElement(array) {
  if (array.length === 0) {
    return null
  } else
    return array[array.length - 1]
}
lastElement([3, 5, 7]) //7
lastElement([1]) //1
lastElement([]) //null


/*
Last Element Exercise
=======================
Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged).  For example:

-capitalize('eggplant') // "Eggplant"
-capitalize('pamplemousse') // "Pamplemousse"
-capitalize('squid') //"Squid"
*/

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize('eggplant')) // "Eggplant"
console.log(capitalize('pamplemousse')) // "Pamplemousse"
console.log(capitalize('squid')) //"Squid"



/*
Sum Array Exercise
=======================
Write a function called sumArray which accepts a single argument: an array of numbers.  It should return the sum of all the numbers in the array.

sumArray([1,2,3]) // 6
sumArray([2,2,2,2]) // 8
sumArray([50,50,1]) // 101
*/

function sumArray(arr) {
  let sum = 0
  for (const value of arr) {
    sum += value
  }
  return sum
}

const total = sumArray([50, 50, 1]);
console.log(total);

/*
Days of The Week Exercise
=======================
Write a function called returnDay. this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  If the number is less than 1 or greater than 7, the function should return null. In some countries Sunday is treated as the first day of the week, but for this exercise we will use Monday as the first day.

Hint: store the days of the week in an array, or use an object with numerical keys.  When the function is called, plug the number into the array/object you've created to retrieve the corresponding day name and then return that value.

returnDay(1) // "Monday"
returnDay(7) // "Sunday"
returnDay(4) // "Thursday"
returnDay(0) // null
*/

function returnDay(day) {
  switch (day) {
    case 1:
      return 'Monday'
      break;
    case 2:
      return 'Tuesday'
      break;
    case 3:
      return 'Wednesday'
      break;
    case 4:
      return 'Thursday'
      break;
    case 5:
      return 'Friday'
      break;
    case 6:
      return 'Saturday'
      break;
    case 7:
      return 'Sunday'
      break;
    default:
      return null
  }
}

let whichDay = returnDay(1);
console.log(whichDay);


/*
Function Expression Exercise
=======================
Define a function that returns the square of a number. Define the function as a function expression, stored in a variable called square.  NOTE: Udemy's coding exercise platform does NOT support the ** operator. 

-square(4) //16
-square(3) //9
*/
const kubus = function (num) {
  return num * num;
};
const sum1 = kubus(4);
const sum2 = kubus(6);
console.log(sum1, sum2)


/*
Methods Exercise
=======================
Define an object called square, which will hold methods that have to do with the geometry of squares. It should contain two methods, area and perimeter 

area should accept the length of a side (all sides are the same in a square) and then return the side squared. 

perimeter should accept the length of a side and return that side multiplied by 4.

-square.area(10) //100
-square.perimeter(10) //40
*/

const square = {
  area(side) {
    return side * side
  },
  perimeter(side) {
    return side * 4
  }
}

console.log(square.area(10)); //100
console.log(square.perimeter(10)); //40


/*
Egg Laying Exercise
=======================
Egg Laying Exercise
Define an object called hen.  It should have three properties:

name should be set to 'Helen'

eggCount should be set to 0

layAnEgg should be a method which increments the value of eggCount by 1 and returns the string "EGG".  You'll need to use this.

-hen.name // "Helen"
-hen.eggCount // 0
-hen.layAnEgg() // "EGG"
-hen.layAnEgg() // "EGG"
-hen.eggCount // 2
*/

const hen = {
  name: 'Helen',
  eggCount: 0,
  layAnEgg() {
    this.eggCount++
    return 'EGG'
  }
}

console.log(hen.eggCount);
console.log(hen.layAnEgg());
console.log(hen.layAnEgg());
console.log(hen.layAnEgg());
console.log(hen.eggCount);


/*
Map Practice
=======================
Define a variable named firstNames and assign it to the result of mapping over the existing array, fullNames, so that firstNames contains only the first names of the Harry Potter characters from the fullNames array.

e.g.,

console.log(firstNames); // ['Albus', 'Harry', 'Hermione', 'Ron', 'Rubeus', 'Minerva', 'Severus']


Please note:

The fullNames array is an array of objects with each object containing properties for the first and last names of each character. You may need to click the "Reset code" link if you do not see the fullNames array pre-loaded into the exercise's index.js file.

This exercise has been updated, you may see Q&A threads from this lecture that relate to the original exercise which no longer exists. They can be ignored.
*/

// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [
  {
    first: 'Albus',
    last: 'Dumbledore'
  },
  {
    first: 'Harry',
    last: 'Potter'
  },
  {
    first: 'Hermione',
    last: 'Granger'
  },
  {
    first: 'Ron',
    last: 'Weasley'
  },
  {
    first: 'Rubeus',
    last: 'Hagrid'
  },
  {
    first: 'Minerva',
    last: 'McGonagall'
  },
  {
    first: 'Severus',
    last: 'Snape'
  }];

// const firstNames = fullNames.map(function (orang) {
//   return orang.first;
// });

const firstNames = fullNames.map(orang => orang.first);

console.log(firstNames);
console.log(typeof firstNames)


/*
Map Practice
=======================
Write an arrow function expression called greet.  It should accept a single string argument, representing a person's name.  It should return a greeting string as shown below:

-greet("Hagrid") //"Hey Hagrid!" 
-greet("Luna") //"Hey Luna!"
*/

const greet = (person) => {
  return `Hey ${person}!`;
};

console.log(greet('Hagrid'));
console.log(greet('Luna'));

/*
Filter Exercise
=======================
Write a function called validUserNames that accepts an array of usernames (strings).  It should return a new array, containing only the usernames that are less than 10 characters.
*/

function validUserNames(usernames) {
  // your code here
  const filterArr = usernames.filter(function (names) {
    return names.length < 10;
  });
  return filterArr;
}