// Variables
let baseIn = document.getElementById("baseIn");
let heightIn = document.getElementById("heightIn");
let calcBtn = document.getElementById("calcBtn");
let output = document.getElementById("result");

// Event Listener 
calcBtn.addEventListener("click", outputArea);

// Function (Takes User Input)
function outputArea() {

    // User Input
    let hIn = +heightIn.value;
    let bIn = +baseIn.value;

    // Output 
    output.innerHTML = calcArea(hIn, bIn);

}

// Function (Math)
function calcArea(b, h) {
    // Math Process
    return (b * h) / 2;
}