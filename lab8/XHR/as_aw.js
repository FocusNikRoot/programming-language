function requestPromise(url) {
  return new Promise((resolve, reject) => {
    request(url, (data) => {
      resolve(data);
    });
  });
}

async function makeRequests() {
  try {
    const catFactData = await requestPromise('https://cat-fact.herokuapp.com/facts/random');
    document.getElementById('cat-fact').innerHTML = `<h2>Cat Fact:</h2><p>${catFactData.text}</p>`;

    const chuckNorrisData = await requestPromise('https://api.chucknorris.io/jokes/random');
    document.getElementById('chuck-norris-joke').innerHTML = `<h2>Chuck Norris Joke:</h2><p>${chuckNorrisData.value}</p>`;

    const triviaData = await requestPromise('https://opentdb.com/api.php?amount=1');
    document.getElementById('trivia-question').innerHTML = `<h2>Trivia Question:</h2><p>${triviaData.results[0].question}</p>`;

    const pokemonData = await requestPromise('https://pokeapi.co/api/v2/pokemon/1');
    document.getElementById('pokemon-name').innerHTML = `<h2>Pokémon Name:</h2><p>${pokemonData.name}</p>`;

    const starWarsData = await requestPromise('https://swapi.dev/api/people/1');
    document.getElementById('star-wars-character').innerHTML = `<h2>Star Wars Character:</h2><p>${starWarsData.name}</p>`;
  } catch (error) {
    document.getElementById('error-message').innerHTML = `<h2>Error:</h2><p>${error.message}</p>`;
    console.error('Error:', error);
  }
}