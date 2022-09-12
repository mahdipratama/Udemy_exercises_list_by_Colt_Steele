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