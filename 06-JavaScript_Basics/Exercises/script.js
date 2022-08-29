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