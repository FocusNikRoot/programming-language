function TransformArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0 && arr[i] > 0) {
            arr[i] *= 3;
        } else if (i % 2 === 0 && arr[i] < 0) {
            arr[i] /= 5;
        }
    }
    return arr;
}

function TwelveDisplayInfo() {
    console.log("\nДвенадцатое задание");
    let arr =[];
    for (let i = 0; i < 5; i++) {
        let ratio = Math.random() < 0.5 ? -1 : 1;
        arr.push(Math.floor( Math.random() * 20 * ratio));
    }
    console.log(`Массив: ${arr}`);
    console.log(`Результа: ${TransformArray(arr)}`);
}