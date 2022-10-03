const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {
  const newColor = randomColor();
  document.body.style.backgroundColor = newColor;
  h1.textContent = newColor;
});

const randomColor = () => {
  const r = Math.trunc(Math.random() * 255)
  const g = Math.trunc(Math.random() * 255)
  const b = Math.trunc(Math.random() * 255)
  return `rgb(${r}, ${g}, ${b})`
}