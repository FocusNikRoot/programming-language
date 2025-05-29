function displayDifferenceNumbers(result, output) {
    output.innerHTML += `<p>Первая функция: ${result}</p>`;
}

function differenceNumber(num1, num2) {
    return num1 - num2;
}

function OneDisplayInfo() {
    const num1 = document.getElementById("OneNumberInput1").value;
    const num2 = document.getElementById("OneNumberInput2").value;
    const output = document.getElementById("OneOutput");
    output.innerHTML = '';

    let result1 = num1 - num2;
    displayDifferenceNumbers(result1, output);

    output.innerHTML += `Вторая функция: ${differenceNumber(num1, num2)}`;
}
