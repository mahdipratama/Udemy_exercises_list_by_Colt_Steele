// Onclick Property
const btn = document.querySelector('#v2');

btn.onclick = function () {
  console.log('YOU CLICKED ME');
  console.log('I HOPE IT WORKED!!');
}


function scream() {
  console.log('HELP!!');
  console.log('Stop Touching me!');
}
btn.onmouseenter = scream

document.querySelector('h1').onclick = () => {
  alert('you clicked the h1')
};


// addEventListener
const btn3 = document.querySelector('#v3');
btn3.addEventListener('dblclick', function () {
  alert('clicked!')
});


const tasButton = document.querySelector('#tas');

function twist() {
  console.log('TWIST!');
}

function shout() {
  console.log('SHOUT!');
}

tasButton.addEventListener('click', twist);
tasButton.addEventListener('click', shout);
