function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] *= 2;
        }
    }
}

let window = {
    weight: 200,
    height: 300,
    material: "glass"
};

console.log(window);
multiplyNumeric(window);
console.log(window);