
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