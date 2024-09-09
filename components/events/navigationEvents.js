import firebase from 'firebase';
import { signOut } from '../../utils/auth';
import {
  getVocab,
  jsVocab,
  htmlVocab,
  cssVocab,
  // getVocabTime,
} from '../../api/vocabData';
import { showVocab } from '../../pages/vocabCard';
// import showSorting from '../sort';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // TODO:
  document.querySelector('#javaScript').addEventListener('click', () => {
    jsVocab(`${firebase.auth().currentUser.uid}`).then(showVocab);
  });

  document.querySelector('#html').addEventListener('click', () => {
    htmlVocab(`${firebase.auth().currentUser.uid}`).then(showVocab);
  });

  document.querySelector('#css').addEventListener('click', () => {
    cssVocab(`${firebase.auth().currentUser.uid}`).then(showVocab);
  });

  // TODO: ALL Vocab
  document.querySelector('#allVocab').addEventListener('click', () => {
    getVocab(`${firebase.auth().currentUser.uid}`).then(showVocab);
    // getBooks(user.uid).then(showBooks);
  });
  // document.querySelector('#sort-btn').addEventListener('click', () => {
  //   // document.querySelector('#lang-container').innerHTML = '';
  //   showSorting();
  //   getVocabTime().then((vocabArray) => showVocab(vocabArray.reverse()));
  // });
};

export default navigationEvents;
