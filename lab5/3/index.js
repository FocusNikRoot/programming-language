function f1(x, callback) {
    return Promise.resolve().then(() => {
        setTimeout(() => {
            const result = x * x
            console.log(`f1(${x}) = ${result}`)
            callback(result)
        }, Math.floor(Math.random() * 1000))
    })
}

function f2(x, callback) {
    return Promise.resolve().then(() => {
        setTimeout(() => {
            const result = 2 * x
            console.log(`f2(${x}) = ${result}`)
            callback(result)
        }, Math.floor(Math.random() * 1000))
    })
}

function f3(x, callback) {
    return Promise.resolve().then(() => {
        setTimeout(() => {
            const result = -2
            console.log(`f3(${x}) = ${result}`)
            callback(result)
        }, Math.floor(Math.random() * 1000))
    })
}

function f4(x, callback) {
    return Promise.resolve().then(() => {
        setTimeout(() => {
            const result = x / 2
            console.log(`f4(${x}) = ${result}`)
            callback(result)
        }, Math.floor(Math.random() * 1000))
    })
}

function f5(x, callback) {
    return Promise.resolve().then(() => {
        setTimeout(() => {
            const result = x + 5
            console.log(`f5(${x}) = ${result}`)
            callback(result)
        }, Math.floor(Math.random() * 1000))
    })
}

function f6(x, callback) {
    return Promise.resolve().then(() => {
        setTimeout(() => {
            const result = x - 7
            console.log(`f6(${x}) = ${result}`)
            callback(result)
        }, Math.floor(Math.random() * 1000))
    })
}

const functions = [f1, f2, f3, f4, f5, f6]

function Fx(x, n, callback) {
    return Promise.resolve().then(() => {
        let currentResult = 0
        let index = 0

        function nextStep() {
            if (index < n) {
                functions[index](x, (result) => {
                    currentResult += result
                    index++
                    nextStep()
                })
            } else {
                console.log(`Result after ${n} steps: ${currentResult}`)
                callback()
            }
        }

        nextStep()
    })
    
}

Fx(3, 2, () => { console.log('First done') })
Fx(3, 4, () => { console.log('Second done') })
Fx(3, 6, () => { console.log('All done') })