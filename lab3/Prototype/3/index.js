let hamster = {
    stomach: [],
    eat(food) {
        this.stomach.push(food);
    }
};
let speedy = {
    __proto__: hamster,
    stomach: [] // Свой stomach
};
let lazy = {
    __proto__: hamster,
    stomach: [] // Свой stomach
};
speedy.eat("apple");
console.log(speedy.stomach); // [ 'apple' ]
console.log(lazy.stomach); // []
