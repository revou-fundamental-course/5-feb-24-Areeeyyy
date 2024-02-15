let currentFunction = convertCtoF;

document.addEventListener('DOMContentLoaded', function() {
});

function convertCtoF() {
    console.log('converCtoF funtion called')
    var celsius = parseInt(document.getElementById('input').value);
    if (isNaN(celsius)) {
        celsius = 0;
    }
    var fahrenheit = celsius * 9/5 + 32;
    var hasil_cara = `${celsius} x 9/5 + 32 = ${fahrenheit.toFixed(2)}°F`;
    document.getElementById('input').value = celsius.toFixed(0);
    document.getElementById('hasil').innerText = fahrenheit.toFixed(2);
    document.getElementById('hasil-cara').innerText = hasil_cara;
}

function convertFtoC() {
    console.log('converFtoC funtion called')
    var fahrenheit = parseInt(document.getElementById('input').value);
    if (isNaN(fahrenheit)) {
        fahrenheit = 0;
    }
    var celsius = (fahrenheit - 32) * 5/9;
    var hasil_cara = `${fahrenheit} - 32 x 5/9 = ${celsius.toFixed(2)}°C`;
    document.getElementById('input').value = fahrenheit.toFixed(0);
    document.getElementById('hasil').innerText = celsius.toFixed(2);
    document.getElementById('hasil-cara').innerText = hasil_cara;
}

function convert() {
    console.log('convert function called');
    if (currentFunction === convertCtoF) {
        convertCtoF();
    } else {
        convertFtoC();
    }
}

function reverse() {
    console.log('reverse function called');
    // Get the 'input' and 'hasil' elements
    var input = document.getElementById('input');
    var hasil = document.getElementById('hasil');

    // Swap the values of the 'input' and 'hasil' elements
    var temp = input.value;
    input.value = hasil.innerText;
    hasil.innerText = temp;

    // Get the labels
    var inputLabel = document.querySelector("label[for='input']");
    var hasilLabel = document.querySelector("label[for='hasil']");

    // Swap the text of the labels
    var tempLabel = inputLabel.innerText;
    inputLabel.innerText = hasilLabel.innerText;
    hasilLabel.innerText = tempLabel;

    // Switch the function on each click
    if (currentFunction === convertCtoF) {
        currentFunction = convertFtoC;
    } else {
        currentFunction = convertCtoF;
    }
    convert()
}



function reset() {
    console.log('reset function called')
    document.getElementById('input').value = '';
    document.getElementById('hasil').innerText = '';
    document.getElementById('hasil-cara').innerText = '';
}


