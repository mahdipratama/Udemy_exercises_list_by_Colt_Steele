/* create exactly 100 new button elements! Add each new button inside the container element provided in index.html.  Unfortunately, Udemy's exercise tool does not support to the append method, so you will need to use appendChild.  Here are the steps:

Create exactly 100 new button elements

Each button must have some text inside of it (it doesn't matter what)

Each button must be appended inside the container div. 
*/

for (let i = 0; i < 100; i++) {
  const newButton = document.createElement("button");
  newButton.innerText = "Hey!";
  const container = document.querySelector("#container");
  container.appendChild(newButton);
}