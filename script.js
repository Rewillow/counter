// COUNTER

// Stabiliamo che i 3 bottoni debbano essere dentro il div 'col', a sua volta dentro 'container'

const div = document.getElementById('col');

// Creiamo il tasto decremento

const btn_minus = document.createElement ('button'); // Creiamo un bottone
btn_minus.id = 'decrement'; // Applichiamo l'id, utile per poi richiamarlo nelle variabili
btn_minus.className = 'col-decrement' // Applichiamo una classe, utile per gli stili presenti nel CSS
btn_minus.textContent = '-'; // Definiamo il testo del bottone
div.appendChild(btn_minus); // Lo dichiariamo figlio del div 'col'


// Creiamo il visualizzatore del counter 

const btn_counter = document.createElement ('button'); // Creiamo un bottone
btn_counter.id = 'counter'; // Applichiamo l'id, utile per poi richiamarlo nelle variabili
btn_counter.className = 'col-counter' // Applichiamo una classe, utile per gli stili presenti nel CSS
btn_counter.textContent = '0'; // Definiamo il testo del bottone
div.appendChild(btn_counter); // Lo dichiariamo figlio del div 'col'


// Creiamo il tasto incremento

const btn_plus = document.createElement ('button'); // Creiamo un bottone
btn_plus.id = 'increment'; // Applichiamo l'id, utile per poi richiamarlo nelle variabili
btn_plus.className = 'col-increment' // Applichiamo una classe, utile per gli stili presenti nel CSS
btn_plus.textContent = '+'; // Definiamo il testo del bottone
div.appendChild(btn_plus); // Lo dichiariamo figlio del div 'col'


// Variabili

var decrement = document.getElementById("decrement"); // Creiamo la variabile richiamando l'id 'decrement'
var counter = document.getElementById("counter"); // Creiamo la variabile richiamando l'id 'counter'
var increment = document.getElementById("increment"); // Creiamo la variabile richiamando l'id 'increment'
var clear = document.getElementById ("reset-count"); // Creiamo la variabile richiamando l'id 'reset-count'
var add = document.getElementById("add"); // Creiamo la variabile richiamando l'id 'add'
var count = 0; // Impostiamo il valore iniziale del counter a 0

currentCount(); // Creiamo la funzione che terrà conto dei cambiamenti dei valori



// Funzioni Counter 

function currentCount() {
    counter.innerText = count;  // Diciamo che il testo dentro counter debba essere lo stesso a quello di 'count', quindi 0
}
decrement.addEventListener('click', ()=> { // Al click il valore diminurà di 1
    count--;
    currentCount();
})
increment.addEventListener('click', ()=> { // Al click il valore aumenterà di 1
    count++;
    currentCount();  
})
clear.addEventListener ('click', () => { // Al click il valore ritornerà a 0
  count = 0;
  counter.innerText = "0";
  submit.value= "";
})
add.addEventListener('click', () => { // Al click il valore scelto verrà inserito nel counter
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



