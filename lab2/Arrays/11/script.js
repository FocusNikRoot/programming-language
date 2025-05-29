function CheckOrder(arr) {
    let isDescending = true;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            isDescending = false;
            console.log(`Резултат: ${i + 1}`);
            break;
        }
    }

    if (isDescending) {
        arr.reverse();
        console.log(`Резултат: ${arr}`);
    }
}

function ElevenDisplayInfo() {
    console.log("\nОдиннадцатое задание");
    let arr =[];
    for (let i = 0; i < 5; i++) {
        arr.push(Math.floor(Math.random() * 20));
    }
    console.log(`Массив: ${arr}`);
    CheckOrder(arr);
}