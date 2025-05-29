function expression(number) {
    let result = (number ** 2 - 7 * number + 10) / (number ** 2 - 8 * number + 12);

    return result;
}

console.log(expression(10))