const purple = document.querySelectorAll('li');
console.log(purple);

for (let li of purple) {
  li.classList.toggle('highlight');
}