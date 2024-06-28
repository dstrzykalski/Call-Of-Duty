const createRandomJoke = function(data) {

    fetch('https://api.chucknorris.io/jokes/random?category=history,dev,money,sport,science,animal', {
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.value);
    const jokeContainer = document.createElement('div');
    const jokeEl = document.createElement('p');
    const actualJokeContainer = document.getElementById('joke');
  
    jokeEl.textContent = data.value;
    jokeEl.setAttribute('style', 'color: black');
  
    jokeContainer.append(jokeEl);
    actualJokeContainer.append(jokeContainer);
  });
  } 
  
  createRandomJoke();