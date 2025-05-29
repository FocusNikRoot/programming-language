function requestPromise(url) {
  return new Promise((resolve, reject) => {
    request(url, (data) => {
      resolve(data);
    });
  });
}

function makeRequests() {
  requestPromise('https://cat-fact.herokuapp.com/facts/random')
    .then((data) => {
      document.getElementById('cat-fact').innerHTML = `<h2>Cat Fact:</h2><p>${data.text}</p>`;
    })
    .then(() => requestPromise('https://api.chucknorris.io/jokes/random'))
    .then((data) => {
      document.getElementById('chuck-norris-joke').innerHTML = `<h2>Chuck Norris Joke:</h2><p>${data.value}</p>`;
    })
    .then(() => requestPromise('https://opentdb.com/api.php?amount=1'))
    .then((data) => {
      document.getElementById('trivia-question').innerHTML = `<h2>Trivia Question:</h2><p>${data.results[0].question}</p>`;
    })
    .then(() => requestPromise('https://pokeapi.co/api/v2/pokemon/1'))
    .then((data) => {
      document.getElementById('pokemon-name').innerHTML = `<h2>Pokémon Name:</h2><p>${data.name}</p>`;
    })
    .then(() => requestPromise('https://swapi.dev/api/people/1'))
    .then((data) => {
      document.getElementById('star-wars-character').innerHTML = `<h2>Star Wars Character:</h2><p>${data.name}</p>`;
    })
    .catch((error) => {
      document.getElementById('error-message').innerHTML = `<h2>Error:</h2><p>${error.message}</p>`;
      console.error('Error:', error);
    });
}
