const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//#f15025 #ffffff - examples of HEX-colors
const btn = document.getElementById("btn");
const color = document.querySelector(".color")

btn.addEventListener("click", () => {
    let hexColor = '#';
    for (j=0; j<6; j++) {
        let randomNumber = getRandomNumber();
        hexColor += hex[randomNumber];
    }

    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}
