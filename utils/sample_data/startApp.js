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

  // TODO: Put all books on the DOM on App load
  getVocab(user.uid).then((vocab) => showVocab(vocab));
  console.warn(user.uid);
  const now = new Date();
  const day = now.getDay(); // returns a number representing the day of the week, starting with 0 for Sunday
  const hours = now.getHours();
  const minutes = now.getMinutes();
  console.warn(`Today is day ${day} and the time is ${hours}:${minutes}.`);
};

export default startApp;
