// Асинхронные функции
function readConfig (name) {
    return Promise.resolve().then(() => {
        setTimeout(() => {
            console.log('(1) config from ' + name + ' loaded')
        }, Math.floor(Math.random() * 1000))
    })

}
function doQuery (statement) {
    return Promise.resolve().then(() => {
        setTimeout(() => {
            console.log('(2) SQL query executed: ' + statement)
        }, Math.floor(Math.random() * 1000))
    })
}
function httpGet (url) {
    return Promise.resolve().then(() => {
        setTimeout(() => {
            console.log('(3) Page retrieved: ' + url)
        }, Math.floor(Math.random() * 1000))
    })
}
function readFile (path) {
    return Promise.resolve().then(() => {
        setTimeout(() => {
            console.log('(4) Readme file from ' + path + ' loaded')
        }, Math.floor(Math.random() * 1000))
    })
}
function callback () {
    console.log('It is done!')
}
// Вызов функций

console.log('start')

readConfig('myConfig')
doQuery('select * from cities')
httpGet('http://google.com')
readFile('README.md')
callback()

console.log('end')