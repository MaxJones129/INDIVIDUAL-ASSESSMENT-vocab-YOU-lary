import logoutButton from '../../components/buttons/logoutButton';
import domBuilder from '../../components/domBuilder';
import navBar from '../../components/navbar';
// import domEvents from '../events/domEvents';
// import formEvents from '../events/formEvents';
import navigationEvents from '../../components/events/navigationEvents';
import { getVocab } from '../../api/vocabData';
import { showVocab } from '../../pages/vocabCard';
import domEvents from '../../components/events/domEvents';
import formEvents from '../../components/events/formEvents';

const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // puts only cards on the DOM with a matching uid to the user
  getVocab(user.uid).then((vocab) => showVocab(vocab));
  console.warn(user.uid);
};

export default startApp;
