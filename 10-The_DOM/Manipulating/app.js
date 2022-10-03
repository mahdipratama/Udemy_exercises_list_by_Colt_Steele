// Selecting all 'img' tag name
// const allImage = document.getElementsByTagName('img'); 

// for (let img of allImage) {
//   img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg'
// }

// // Selecting all 'square' class
// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//   img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg'
// }


// Selecting any type single element
const headingImg = document.querySelector('img')
console.log(headingImg);

const secondImg = document.querySelector('img:nth-of-type(2)')
console.log(secondImg);

const titleJava = document.querySelector('a[title="Java"]')
console.log(titleJava);

const firstBanner = document.querySelector('#banner');
console.log(firstBanner);

const firstSquare = document.querySelector('.square');
console.log(firstBanner);


// Selecting any type all elements
const allP = document.querySelectorAll('p');
console.log(allP);

const allImg = document.querySelectorAll('img');
console.log(allImg);


// -selecting all 'a' nested inside of 'p'
const links = document.querySelectorAll('p a')
console.log(links);

for (let link of links) {
  console.log(link.href);
}

const allLinks = document.querySelectorAll('a');

for (let link of links) {
  link.style.color = 'rgb(0, 108, 134';
  link.style.textDecorationColor = 'lightpink';
  link.style.textDecorationStyle = 'wavy'
}


// ClassList 
const h2 = document.querySelector('h2');

h2.classList.add('purple'); // h2 now have a class 'purple'
h2.classList.add('border'); // h2 now have a class 'border'

h2.classList.remove('border'); // h2 now don't have a class 'border'

h2.classList.contains('border'); // false 
h2.classList.contains('purple'); // true 


// Traversing Parent/Child/Sibling
const firstBold = document.querySelector('b');
console.log(firstBold); // <b>Silkie</b>

const paragraph = firstBold.parentElement;
console.log(paragraph); // <p>...</p>

const squareImg = document.querySelector('.square');

squareImg.nextElementSibling // navigate to another Images

squareImg.previousElementSibling // navigate to <p>...</p>


// AppendChild
const newH3 = document.createElement('h3');
newH3.innerText = 'I am New !'
document.body.appendChild(newH3);

// Append
const he2 = document.createElement('h2');
he2.append('Are adorable chickens');

const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend', he2)

const h3 = document.createElement('h3');
h3.innerText = 'I am h3';
h1.after(h3);


// Remove element
const img = document.querySelector('img');
img.remove();