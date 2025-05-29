function addressVerification(string) {
    let flag = false;

    for (let i = 0; i < string.length; i++) {
        if (string[i] == "@") {
            flag = true;
        }
    }

    return flag
}

console.log(addressVerification("aboba@bob")) // или использоваться .includes()