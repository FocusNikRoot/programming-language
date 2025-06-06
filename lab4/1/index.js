function askPassword(login, password, success, failure) {

    const vowels = 'aeiouy'

    login = login.toLowerCase()
    password = password.toLowerCase()

    let vowelsCount = 0
    let sequenceConsonantsPassword = []
    for (const el of password) {
        if (vowels.includes(el)) {
            vowelsCount++
        } else {
            sequenceConsonantsPassword.push(el)
        }
    }

    let sequenceConsonantsLogin = []
    for (const el of login) {
        if (!vowels.includes(el)) {
            sequenceConsonantsLogin.push(el)
        }
    }

    const isVowelsWrong = vowelsCount !== 3
    const isConsonantsWrong = sequenceConsonantsLogin.join('') !== sequenceConsonantsPassword.join('')

    if (isVowelsWrong && isConsonantsWrong) {
        failure(login, "Everything is wrong")
    } else if (isVowelsWrong) {
        failure(login, "Wrong number of vowels")
    } else if (isConsonantsWrong) {
        failure(login, "Wrong consonants")
    } else {
        success(login)
    }
}

function main(login, password) {
    const success = (login) => {
        console.log(`Привет, ${login}!\n`)
    }

    const failure = (login, errorMessage) => {
        console.log(`Кто-то пытался притвориться пользователем ${login}, но в
пароле допустил ошибку: ${errorMessage.toUpperCase()}\n`)
    }

    askPassword(login, password, success, failure)
}

main("login", "legion")
main("login", "imalgn")
main("login", "youlgnx")
main("login", "yolgn")
main("login", "luagon")