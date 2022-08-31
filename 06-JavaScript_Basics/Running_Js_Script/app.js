console.log("HELLO FROM OUR FIRST JS FILE!!!!");
let total = 1 + 3;
console.log("GOODBYE!");

// =====================
// BASIC IF/ELSE
// =====================
let random = Math.random();
if (random < 0.5) {
  console.log("YOUR NUMBER IS LESS THAN 0.5!!!")
} else {
  console.log("YOUR NUMBER IS GREATER (OR EQUAL) THAN 0.5!!!")
}
console.log(random);

// =====================
// PROMPT EXAMPLE
// =====================

const dayOfWeek = prompt('ENTER A DAY').toLowerCase();

if (dayOfWeek === 'monday') {
  alert("UGHHH I HATE MONDAYS!")
} else if (dayOfWeek === 'saturday') {
  alert("YAY I LOVE SATURDAYS!")
} else if (dayOfWeek === 'friday') {
  alert("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!")
} else {
  alert("MEH")
}



// =====================
// TICKET PRICE EXAMPLE
// =====================

// 0-5 - FREE
// 5 - 10 CHILD $10 
// 10 - 65 ADULT $20 
// 65+ SENIOR $10
// const age = 890;

// if (age < 5) {
//   console.log("You are a baby.  You get in for free!")
// } else if (age < 10) {
//   console.log("You are a child.  You pay $10")
// } else if (age < 65) {
//   console.log("You are an adult. You pay $20")
// } else {
//   console.log("You are a senior. You pay $10")
// }

// =====================
// NESTING CONDITIONALS
// =====================

const password = prompt("please enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
  // Password cannot include space
  if (password.indexOf(' ') === -1) {
    console.log("Valid Password!");
  } else {
    console.log("Password cannot contain spaces!")
  }
} else {
  console.log("PASSWORD TOO SHORT! Must be 6+ characters")
}


// Logical END 
const newPassword = prompt('Enter your password');
if (newPassword.length >= 6 && newPassword.indexOf(' ') === -1) {
  console.log('Welcome!');
} else {
  console.log('Incorrect Format Password!');
}


// Logical OR 
const umur = 24;
if (umur >= 0 && umur < 5 || umur >= 65) {
  console.log('Gratis');
} else if (umur >= 5 && umur < 10) {
  console.log('$10');
} else if (umur >= 10 && umur < 65) {
  console.log('$20');
} else {
  console.log('Invalid Age!');
}


// Logical NOT 
const firstName = prompt('Enter Your First Name')
if (!firstName) {
  firstName = prompt('Try Again! ')
}

const age = 8;
if (!(umur >= 0 && umur < 5 || umur >= 65))
  console.log('You\'re not a baby! or a senior!');


// Switch Statement 
const day = 1;
switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
  case 7:
    console.log('Monday');
    break;
  default:
    console.log('I Don\'t know that');
}

// Object Literals 
const kitchenSink = {
  faveNum: 09380,
  isFunny: true,
  colors: ['red', 'orange']
}

