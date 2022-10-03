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