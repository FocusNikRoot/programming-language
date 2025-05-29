let animal = {
    eat() {
        this.full = true;
    }
};
let rabbit = {
    __proto__: animal
};
rabbit.eat();
console.log(rabbit.full)

// Метод eat вызывается на объекте rabbit, но он наследуется от animal.
// Ключевое слово this внутри метода eat ссылается на объект,
// который вызвал метод (то есть rabbit)