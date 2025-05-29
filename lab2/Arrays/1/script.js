function OneDisplayInfo() {
    const text1 = document.getElementById("OneInput1").value;
    const text2 = document.getElementById("OneInput2").value;
    const text3 = document.getElementById("OneInput3").value;
    const output = document.getElementById("OneOutput");
    let arr = [];
    output.innerHTML = '';

    arr[0] = text1;
    arr[1] = text2;
    arr[2] = text3;

    output.innerHTML += `
        <p>Элемент с индексом 2: ${arr[2]}</p>
        <p>Количество элементов массива: ${arr.length}</p>
    `;

    arr.pop(2);

    output.innerHTML += '<p>Элементы массива после удаления элемента:</p>';
    arr.forEach(element => {
        output.innerHTML += `<p>${element}</p>`
    })

}