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