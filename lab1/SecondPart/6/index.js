function degree(x, y) {
    let result = 1;
    let i = 0;

    while (i < y) {
        result *= x;
        i++;
    }

    return result;
}

console.log(degree(2,3));