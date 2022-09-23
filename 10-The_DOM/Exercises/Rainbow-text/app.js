const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const allSpan = document.querySelectorAll('span');

for (let i in colors) {
  allSpan[i].style.color = colors[i];
  console.log[i];
}