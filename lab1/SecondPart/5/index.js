let result = 0;

for (let i = 1; i <= 15; i++) {
    if (i == 5 || i == 7) {
        continue;
    }
    result += i;
}

console.log(result)