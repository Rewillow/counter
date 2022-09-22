// Counter Script

var decrement = document.getElementById("decrement");
var counter = document.getElementById("counter");
var increment = document.getElementById("increment");
var count = 0;

currentCount();

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


// Inserimento valore


let valueArray = []
function getValue() {
    let value = document.getElementById("submit").value
    valueArray.push(value)
    counter.innerText = valueArray;
    document.getElementById("submit").value=""; //Ripulisce la casella dopo aver confermato il valore
    valueArray.pop(); // Ripulisce l'array consentendo l'inserimento di un solo valore
}








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






    
    
