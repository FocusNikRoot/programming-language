let variable = "Глобальная переменнная";
function f() {
    let variable = "Локальная переменная";
    console.log(variable);
}
f();
console.log(variable);

/*
В консоле выводится следующее:

Локальная переменная
Глобальная переменнная

Сначала создается глобальная перменная variable,
затем при вызове ф-ции f() создается локальная переменная variable.
Эта локальная переменная существует только внутри ф-ции и
не затрагивает глобальную переменную(скрывает). После выхожа из ф-ции
локальная перменная удаляется, а глобальная остается неизменной.
Другими словами в JavaScript действует область видимости
 */