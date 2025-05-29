let calculator = {
    read(a, b) {
        this.a = a;
        this.b = b;
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
}

calculator.read(2, 3);
console.log(calculator);
console.log(calculator.sum(2, 3));
console.log(calculator.mul(2, 3));