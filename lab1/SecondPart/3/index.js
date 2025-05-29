"use strict";

let number = 1;

if (0 <= number <= 10) {
    switch (number) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            console.log(`На ветке сидят ${number} ворон`);
            break;
        case 1:
            console.log(`На ветке сидит ${number} ворона`);
            break;
        case 2:
        case 3:
        case 4:
            console.log(`На ветке сидят ${number} вороны`);
            break;
        default:
            console.log("На ветке сидят больше 10 ворон")
            break;
    }
}