const user = {
    name: "John"
};
// это будет работать?
user.name = "Pete"; // Да, т.к. мы изменяем свойство объета а не сам объект
// а это?
user = 123; // Выводит следующую ошибку: (TypeError: Assignment to constant variable.) Нельзя изменять константную переменную
