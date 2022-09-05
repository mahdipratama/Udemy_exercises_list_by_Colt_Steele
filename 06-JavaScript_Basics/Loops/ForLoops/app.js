// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }


// // Printing I Love You 3000
// let times = 3000;
// for (let i = 1; i <= times; i++) {
//   console.log('I Love You! ' + i);
// }   

// for (let i = 2; i <= 20; i+= 2) {
//   console.log(i);
// }

// for (let i = 100; i >= 0; i -= 10) {
//   console.log(i);
// }



// ===================================
// ITERATING OVER ARRAYS!
// ===================================

// const animals = [
//   "Aardvark",
//   "Aardwolf",
//   "African Elephant",
//   "African Tree Pangolin",
//   "Alligator",
//   "Alpaca",
//   "Anteater",
//   "Antelope",
//   "Ape(s)",
//   "Arabian Horse",
//   "Armadillo",
//   "Arthropod(s)",
//   "Asian Elephant",
//   "Aye-Aye",
//   "Baboon",
//   "Badger",
//   "Bandicoot",
//   "Bangle Tiger",
//   "Bat(s)",
//   "Bearded Dragon",
//   "Beaver",
//   "Beluga Whale",
//   "Bengal Tiger",
//   "Big-Horned Sheep",
//   "Billy Goat",
//   "Bird(s)",
//   "Bison",
//   "Black Bear",
//   "Black Footed Rhino",
//   "Black Howler Monkey",
//   "Black Rhino",
//   "Blacktip Reef Shark",
//   "Blue Shark",
//   "Blue Whale",
//   "Boar",
//   "Bob-Cat",
//   "Bonobo",
//   "Bottlenose Dolphin",
//   "Bottlenose Whale",
//   "Brown Bear",
//   "Buffalo",
//   "Bull",
//   "Bull frog",
//   "Caiman Lizard",
//   "Camel",
//   "Capuchin Monkey",
//   "Capybara",
//   "Caribou",
//   "Cat(s)",
//   "Cattle",
//   "Cheetah",
//   "Chimpanzee",
//   "Chinchilla",
//   "Chipmunk",
//   "Common Dolphin",
//   "Common Seal",
//   "Coral(s) and Anemone(s)",
//   "Cougar",
//   "Cow(s)",
//   "Coyote",
//   "Crocodile",
//   "Crustacean(s)",
//   "Dart Frog",
//   "Deer",
//   "Degus",
//   "Dik-Dik",
//   "Dingo",
//   "Dog(s)",
//   "Dogfish Shark",
// ]

// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }

// Backwards
// for (let i = animals.length - 1; i >= 0; i--) {
//   console.log(i, animals[i]);
// }



// ===================================
// NESTED LOOPS
// ===================================

// for (let i = 1; i <= 10; i++) {
//   console.log(`I is :  ${i}`)
//   for (let j = 1; j <= 3; j++) {
//     console.log(`     is j: ${j}`);
//   }
// }

// const seatingChart = [
//   ['Kirsten', 'Erik', 'Namita'],
//   ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//   ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i <= seatingChart.length; i++) {
//   const row = seatingChart[i];
//   console.log(`ROW #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }



// ===================================
// WHILE LOOP
// ===================================

// let count = 0;
// while (count <= 10) {
//   console.log(count);
//   count++
// }

// const SECRET = 'Nami Cantik';
// let guess = prompt('Enter the secret word...');
// while (guess !== SECRET) {
//   guess = prompt('Enter the secret word...');
// }
// console.log('You\'re our partner!')

// let targetNum = Math.floor(Math.random() * 10);
// let guessNum = Math.floor(Math.random() * 10);

// while (true) {
//   guess = Math.floor(Math.random() * 10);
//   if (guess === targetNum) {
//     console.log(`CORRECT! Guessed: ${guess} $ target was: ${targetNum}`);
//     break;
//   }
//   else {
//     console.log(`Guessed ${guess}...Incorrect!`);
//   }
// }

// let input = prompt('Hey, say something!', 'like what ?');
// while (true) {
//   input = prompt(input);
//   if (input.toLocaleLowerCase() === 'stop copying me') break;
// }
// alert('OKE YOU WIN!');


// // Break Keyword 
// for (let i = 0; i <= 1000; i++) {
//   console.log(i);
//   if (i === 100) break;
// }

// // Guess the Number Game!
// let maximum = parseInt(prompt('Enter the maximum number!'))
// while (!maximum) {
//   maximum = parseInt(prompt('Enter a valid number!'));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// let guess = parseInt(prompt('Enter your first guess!'));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//   if (guess === 'q') break;
//   attempts++;
//   if (guess > targetNum) {
//     guess = prompt('Too  high! Enter a new guess: ')
//   } else {
//     guess = prompt('Too low! Enter a new guess: ')
//   }
// }
// if (guess === 'q') {
//   alert('OK, YOU QUIT');
// } else {
//   alert('CONGRATS YOU WIN!')
//   alert(`YOU GOT IT ! it took you ${attempts} guesses`);
// }
