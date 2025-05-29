let promise = new Promise(function(resolve, reject) {
resolve(1); //Резолв разрешается первый и последний раз
setTimeout(() => resolve(2), 1000); //Резолв игнорируется т.к. уже был выполнен (Хотя таймаут отрабатывает)
});
promise.then(console.log);