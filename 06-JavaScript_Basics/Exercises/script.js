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