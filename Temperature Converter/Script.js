// Get references to HTML elements
const inputTemp = document.getElementById("inputTemp");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertButton = document.getElementById("convert");
const resultParagraph = document.getElementById("result");

// Add click event listener to the convert button
convertButton.addEventListener("click", convertTemperature);

// Define the temperature conversion function
function convertTemperature() {
    const temperature = parseFloat(inputTemp.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    let result;

    if (from === to) {
        result = temperature; // No conversion needed
    } else if (from === "celsius" && to === "fahrenheit") {
        result = (temperature * 9/5) + 32;
    } else if (from === "fahrenheit" && to === "celsius") {
        result = (temperature - 32) * 5/9;
    } else if (from === "celsius" && to === "kelvin") {
        result = temperature + 273.15;
    } else if (from === "kelvin" && to === "celsius") {
        result = temperature - 273.15;
    } else if (from === "fahrenheit" && to === "kelvin") {
        result = (temperature - 32) * 5/9 + 273.15;
    } else if (from === "kelvin" && to === "fahrenheit") {
        result = (temperature - 273.15) * 9/5 + 32;
    } else {
        result = "Invalid conversion";
    }

    if (!isNaN(result)) {
        resultParagraph.textContent = `Result: ${result.toFixed(2)} ${toUnit.options[toUnit.selectedIndex].text}`;
    } else {
        resultParagraph.textContent = "Invalid input";
    }
}
