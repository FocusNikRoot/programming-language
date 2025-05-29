function SwapMinMax(arr) {
    let maxIndex = arr.indexOf(Math.max(...arr));
    let minIndex = arr.indexOf(Math.min(...arr));

    [arr[maxIndex], arr[minIndex]] = [arr[minIndex], arr[maxIndex]];

    return arr;
}

function TenDisplayInfo() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 20));
    }

    console.log("\nДесятое задание");
    console.log("Изначальный массив: " + arr);
    console.log("Измененный массив: " + SwapMinMax(arr));
}
