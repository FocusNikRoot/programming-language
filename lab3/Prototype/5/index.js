function Rabbit() {}
Rabbit.prototype = {
    eats: true
};
let rabbit = new Rabbit();

// Rabbit.prototype = {}; // Не влияет на уже созданные объекты, т.к.
// // они продолжают ссылаться на старый прототип
// Rabbit.prototype.eats = false; // Объект rabbit продолжает ссылаться на тот же прототип,
// // поэтому значение rabbit.eats теперь равняется false
// delete rabbit.eats; // Удаляем свойство eats из объекта rabbit.
// // Но т.к. свойство eats находится в прототипе, то и удалить мы его не можем.
// // "delete" удаляет только собственные свойства объекта
// delete Rabbit.prototype.eats; // Удаяем свойство eats из прототипа Rabbit.prototype.
// // Теперь ни у объекта, ни у прототипа нет свойства eats.
// // Поэтому в выводе undefined

console.log(rabbit.eats);