function greaterOfTheThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

function ThreeDisplayInfo() {
    const num1 = parseFloat(document.getElementById('ThreeNumberInput1').value);
    const num2 = parseFloat(document.getElementById('ThreeNumberInput2').value);
    const num3 = parseFloat(document.getElementById('ThreeNumberInput3').value);
    const output =document.getElementById('ThreeOutput');

    output.innerHTML = `Наибольшее число: ${greaterOfTheThree(num1, num2, num3)}`;
}