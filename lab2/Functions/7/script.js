function SequenceMember(n, sum = 0, index = 1) {
    if (index > n) {
        return sum;
    }

    return SequenceMember(n, sum + Math.sin(index), index + 1);
}

function SevenDisplayInfo() {
    const num = parseFloat(document.getElementById("SevenInput").value);
    const output = document.getElementById("SevenOutput");


    if (isNaN(num) || num <= 0) {
        output.innerHTML = "Введите корректное число!";
        return;
    }

    output.innerHTML = `Вывод: ${SequenceMember(num)}`;

}