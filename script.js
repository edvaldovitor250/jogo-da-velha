// Initial Data
let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: '',
}

let player = '';
let warning = '';
let plating = false;

// Events

document.querySelector('.reset').addEventListener('click',reset);


// Funcitons

function reset() {
    warning = '';

    let random = Math.floor(Math.random() *2);
    player = (random === 0 ) ? 'x' : 'o';
    
   for(let i in square){
    square[i] = '';
   }

   plating = true;

   
   renderSquare();
   renderInfo();
}

function renderSquare() {
    for( let i in square ) {
       let item = document.querySelector(`div[data-item=${i}]`);
       item.textContent = square[i];
    }

}
function renderInfo() {
    document.querySelector(`.vez`).innerHTML = player
    document.querySelector(`.warning`).innerHTML = warning
}