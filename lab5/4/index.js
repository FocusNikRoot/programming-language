function sumWithPromise(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject(new Error('Arguments must be defined and of type number'))
        } else {
            resolve(a + b)
        }
    })
}

function periodicSum(a, b) {
    let count = 0
    let currentSum = a

    const intervalId = setInterval(() => {
        sumWithPromise(currentSum, b)
            .then(sum => {
                count++
                currentSum = sum
                console.log(`Iteration: ${count}, Sum: ${currentSum}`)
                if (count === 5) {
                    clearInterval(intervalId)
                }
            })
            .catch(e => {
                console.error(`Error: ${e.message}`)
                clearInterval(intervalId)
            })
    }, 2000)
}

periodicSum(2, 3)
periodicSum(undefined, 3)