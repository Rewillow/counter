var decrement = document.getElementById("decrement");
var counter = document.getElementById("counter");
var increment = document.getElementById("increment");
var count = 0;

currentCount();

decrement.addEventListener('click', ()=> {
    count--;
    currentCount();
})

increment.addEventListener('click', ()=> {
    count++;
    currentCount();
})

function currentCount() {
    counter.innerText = count;
}
