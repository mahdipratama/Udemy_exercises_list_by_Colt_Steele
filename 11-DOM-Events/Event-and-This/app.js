const randomColor = () => {
  const r = Math.trunc(Math.random() * 255)
  const g = Math.trunc(Math.random() * 255)
  const b = Math.trunc(Math.random() * 255)
  return `rgb(${r}, ${g}, ${b})`
}

// function colorize() {
//   this.style.backgroundColor = randomColor();
//   this.style.color = randomColor();
// }

const colorize = function () {
  this.style.backgroundColor = randomColor();
  this.style.color = randomColor();
}

console.log(colorize);

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
  button.addEventListener('click', colorize);
};

const h1S = document.querySelectorAll('h1');
for (let h1 of h1S) {
  h1.addEventListener('click', colorize)
}



