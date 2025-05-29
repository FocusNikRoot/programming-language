function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

console.log(isEmpty({}));
console.log(isEmpty({name: "John", surname: "Smith"}));