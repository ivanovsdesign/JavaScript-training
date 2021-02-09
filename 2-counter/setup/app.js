const value = document.getElementById("value");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");

var counter = 0;

decrease.addEventListener("click", () => {
    counter--;
    pushCounterValue(counter);
    colorRange(counter);
})

increase.addEventListener("click", () => {
    counter++;
    pushCounterValue(counter);
    colorRange(counter);
})

reset.addEventListener("click", () => {
    counter = 0;
    pushCounterValue(counter);
    colorRange(counter);
})




function pushCounterValue(counter){
    value.innerHTML = counter;
}

function colorRange(counter){
    if (counter < 0){
        value.style.color = "red";
    }
    else if (counter > 0){
        value.style.color = "green";
    }
    else value.style.color = "hsla(209, 61%, 16%, 1)"
}