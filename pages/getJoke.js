const getJoke = () => new Promise((resolve, reject) => {
  fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => (response.json()))
    .then((data) => resolve(data))
    .catch(reject);
});

export default getJoke;
