class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Rabbit extends Animal {
    constructor(name) {
        super(name); // ###
        this.created = Date.now();
    }
}
let rabbit = new Rabbit("Белый кролик");
console.log(rabbit.name, rabbit.created);

// Необходимо вызвать super() для вызова конструктора родительского класса (Animal)
// Это нужно для корректной инициализации свойств, унаследованных от родителя