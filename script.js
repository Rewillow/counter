// COUNTER

// Creiamo i 3 bottoni dentro il div 'col'

const div = document.getElementById('col');

// Creiamo il tasto decremento

const btn_minus = document.createElement ('button');
btn_minus.id = 'decrement';
btn_minus.textContent = '-';
div.appendChild(btn_minus);

// Applichiamo gli stili al tasto decremento

btn_minus.style.textAlign = 'center';
btn_minus.style.backgroundColor = 'rgb(197, 197, 10)';
btn_minus.style.border = 'none';
btn_minus.style.borderRadius = '20px';
btn_minus.style.fontSize = '5rem';
btn_minus.style.marginLeft = '25px'
btn_minus.style.marginRight = '25px'
btn_minus.style.padding = '30px 40px 30px 40px';
btn_minus.style.cursor = 'pointer';
btn_minus.style.fontFamily = 'cabin, sans-serif';

// Creiamo il visualizzatore del counter  
const btn_counter = document.createElement ('button');
btn_counter.id = 'counter';
btn_counter.textContent = '0';
div.appendChild(btn_counter);

// Applichiamo gli stili al visualizzatore counter

btn_counter.style.textAlign = 'center';
btn_counter.style.backgroundColor = 'white';
btn_counter.style.border = 'none';
btn_counter.style.borderRadius = '20px';
btn_counter.style.fontSize = '5rem';
btn_counter.style.marginLeft = '25px'
btn_counter.style.marginRight = '25px'
btn_counter.style.padding = '30px 40px 30px 40px';
btn_counter.style.cursor = 'pointer';
btn_counter.style.fontFamily = 'cabin, sans-serif';

// Creiamo il tasto incremento

const btn_plus = document.createElement ('button');
btn_plus.id = 'increment';
btn_plus.textContent = '+';
div.appendChild(btn_plus);

// Applichiamo gli stili al tasto incremento

btn_plus.style.textAlign = 'center';
btn_plus.style.backgroundColor = 'rgb(9, 188, 24)';
btn_plus.style.border = 'none';
btn_plus.style.borderRadius = '20px';
btn_plus.style.fontSize = '5rem';
btn_plus.style.marginLeft = '25px'
btn_plus.style.marginRight = '25px'
btn_plus.style.padding = '30px 40px 30px 40px';
btn_plus.style.cursor = 'pointer';
btn_plus.style.fontFamily = 'cabin, sans-serif';


// Variabili

var counter = document.getElementById("counter");
var increment = document.getElementById("increment");
var clear = document.getElementById ("reset-count");
var add = document.getElementById("add");
var count = 0;

currentCount();


// Funzioni Counter 

function currentCount() {
    counter.innerText = count;  
}
decrement.addEventListener('click', ()=> {
    count--;
    currentCount();
})
increment.addEventListener('click', ()=> {
    count++;
    currentCount();  
})
clear.addEventListener ('click', () => {
  count = 0;
  counter.innerText = "0";
  submit.value= "";
})
add.addEventListener('click', () => {
    count = submit.value;
    counter.innerText = submit.value;
    submit.value = "";

}) 



// CRONOMETRO


// Variabili Cronometro

const time_el = document.querySelector ('.watch .time'); // Costante tempo
const start_btn = document.getElementById('start'); // Costante Inizio  
const stop_btn = document.getElementById('stop'); // Costante Stop
const reset_btn = document.getElementById('reset'); // Costante Reset

let seconds = 0;
let interval= null;

// Eventi Generali

start_btn.addEventListener('click',start); // Permette che al click il cronometro si avvii
stop_btn.addEventListener ('click', stop); 
reset_btn.addEventListener ('click', reset);

// Aggiornare il tempo

function timer () {
    seconds++;

    // Formato tempo
    let hrs = Math.floor(seconds / 3600);
	let mins = Math.floor((seconds - (hrs * 3600)) / 60);
	let secs = seconds % 60;

	if (secs < 10) secs = '0' + secs; // Per aggiungere lo 0 prima del numero 
	if (mins < 10) mins = "0" + mins; // Per aggiungere lo 0 prima del numero 
	if (hrs < 10) hrs = "0" + hrs; // Per aggiungere lo 0 prima del numero 

    time_el.innerText = `${hrs}:${mins}:${secs}`; // Variabili ore,minuti,secondi
}

function start () {
    if (interval) {
        return;
    }
    interval = setInterval (timer, 1000); // Il numero indica la velocità con la quale scorre il tempo
}

function stop () {
        clearInterval(interval);
        interval = null; 
}

function reset () {
    stop(); // Per prima cosa il procedimento stoppa il tempo
    seconds = 0; // Riporta i secondi al valore di 0
    time_el.innerText = '00:00:00'; // Imposta tutto il timer al valore iniziale

}
