// Get references to the HTML elements
const temperatureInput = document.getElementById("temperature");
const fromUnitSelect = document.getElementById("fromUnit");
const toUnitSelect = document.getElementById("toUnit");
const resultElement = document.getElementById("result");

// Define temperature unit symbols
const unitSymbols = {
  celsius: "°C",
  fahrenheit: "°F",
  kelvin: "K",
};

// Function to convert temperature
function convertTemperature() {
  const temperature = parseFloat(temperatureInput.value);
  const fromUnit = fromUnitSelect.value;
  const toUnit = toUnitSelect.value;

  if (isNaN(temperature)) {
    resultElement.innerHTML = "Please enter a valid temperature.";
    return;
  }

  let converted;

  if (fromUnit === "celsius") {
    if (toUnit === "fahrenheit") {
      converted = (temperature * 9/5) + 32;
    } else if (toUnit === "kelvin") {
      converted = temperature + 273.15;
    } else {
      converted = temperature;
    }
  } else if (fromUnit === "fahrenheit") {
    if (toUnit === "celsius") {
      converted = (temperature - 32) * 5/9;
    } else if (toUnit === "kelvin") {
      converted = (temperature - 32) * 5/9 + 273.15;
    } else {
      converted = temperature;
    }
  } else if (fromUnit === "kelvin") {
    if (toUnit === "celsius") {
      converted = temperature - 273.15;
    } else if (toUnit === "fahrenheit") {
      converted = (temperature - 273.15) * 9/5 + 32;
    } else {
      converted = temperature;
    }
  }

  const fromSymbol = unitSymbols[fromUnit];
  const toSymbol = unitSymbols[toUnit];

  resultElement.innerHTML = `${temperature.toFixed(2)}${fromSymbol} = ${converted.toFixed(2)}${toSymbol}`;
}

// Function to reset input fields and result
function resetFields() {
  temperatureInput.value = "";
  fromUnitSelect.value = "celsius";
  toUnitSelect.value = "celsius";
  resultElement.innerHTML = "";
}

  
