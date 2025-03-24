const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

increaseBtn.onclick = function() {
    count++;
    counter.textContent = count;
}

decreaseBtn.onclick = function() {
    count--;
    counter.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    counter.textContent = count;
}

const max = 100;
const min = 50

let randomNum = Math.trunc(Math.random() * (50)) + min;
console.log(randomNum)