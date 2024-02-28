function convertToCelsius() {
    var input = document.getElementById("temperatureInput").value;
    var celsius = (input - 32) * 5 / 9;
    document.getElementById("result").innerText = input + "°F is " + celsius.toFixed(2) + "°C";
}

function convertToFahrenheit() {
    var input = document.getElementById("temperatureInput").value;
    var fahrenheit = (input * 9 / 5) + 32;
    document.getElementById("result").innerText = input + "°C is " + fahrenheit.toFixed(2) + "°F";
}
