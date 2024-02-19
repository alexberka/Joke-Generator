import renderToDom from '../utils/renderToDom';
import jokes from '../utils/sample_data/jokes';
import getJoke from './getJoke';
import clearElement from '../utils/clearElement';

const showJoke = (btn) => {
  if (btn === 'new-joke') {
    getJoke().then((joke) => {
      if (jokes.length !== 0) jokes.pop();
      clearElement('#joke-container', '#punchline-container');
      jokes.push(joke);
      renderToDom('#joke-container', joke.setup);
      renderToDom('#btn-container', '<button class="btn btn-success" id="punchline">Show Punchline</button>');
    });
  } else if (btn === 'punchline') {
    renderToDom('#punchline-container', jokes[0].delivery);
    renderToDom('#btn-container', '<button class="btn btn-danger" id="new-joke">Get a New Joke</button>');
  }
};

export default showJoke;
