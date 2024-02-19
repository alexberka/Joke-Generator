// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import showJoke from '../pages/showJoke';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>Bienvenue! On te fera rire maintenant...</h1>
    <small>...in English</small>
    <hr />
    <div id="joke-container"></div>
    <div id="punchline-container"></div>
    <div id="btn-container">
      <button class="btn btn-danger" id="new-joke">Get a Joke</button>
    </div>
  `;

  document
    .querySelector('#btn-container')
    .addEventListener('click', (e) => (showJoke(e.target.id)));
};

init();
