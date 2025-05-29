// Добавляем свойсвто color по умолчанию
String.prototype.color = "black";

// Добавляем свойство size(размер шрифта) по умолчанию
String.prototype.size = 12;

// Добавляем метод к встроенному объекту
String.prototype.write = stringWrite;
function stringWrite(){
    console.log("Цвет текста: " + this.color);
    console.log("Текст: " + this.toString())
    console.log("Размер шрифта: " + this.size);
}

// Используем измененный класс
let s = new String("Это строка");
s.color = "red"; // Изменяем цвет на красный
s.write();
let s2 = new String("Вторая строка");
s2.write(); // Цвет по умолчанию
let s3 = new String("Третья строка");
s3.size = 24; // Изменяеем размер шрифта на 24
s3.write();
