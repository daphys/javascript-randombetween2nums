let max = (document.getElementById('first'));
let min = (document.getElementById('second'));
let button = document.getElementById('bfirst');
let answer = document.getElementById('answer');

function randomizer() {
   answer.innerHTML = Math.floor(Math.random() * (Number(max.value) - Number(min.value) + 1) + Number(min.value))

}


button.addEventListener('click', randomizer);