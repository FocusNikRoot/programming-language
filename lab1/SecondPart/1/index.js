let age = 31;

if (age > 0) {
    if (age >= 18 && age <= 30) {
        console.log("Для молодежи");
    } else if (age <= 17) {
        console.log("Для детей");
    } else {
        console.log("Для всех возрастов");
    }
}