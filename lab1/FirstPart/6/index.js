let str = "20";
let a = 5;

console.log(str + a); //конкантенация строк, т.к. str это строка, а a это число, то a преобразуется в строку и получается 205
console.log(str - a); //оператор - всегда пытается преобразовать операнды в числа, поэтому str преобразуется в число и получается в реультате 15
console.log(str * "2"); //оператор также пытается преобразоваться операнды в числа и получается в результате 40
console.log(str / 2); //оператор / преобразуется операнды в числа => 10