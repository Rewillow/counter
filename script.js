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


let valueArray = []
function getValue() {
    let value = document.getElementById("submit").value
    valueArray.push(value)
    counter.innerText = valueArray;
    document.getElementById("submit").value=""; //Ripulisce la casella dopo aver confermato il valore
    valueArray.pop(); // Ripulisce l'array, consentendo l'inserimento di un solo valore
}



    
    
