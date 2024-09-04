import firebase from 'firebase';
import { signOut } from '../../utils/auth';
import {
  getVocab,
  jsVocab,
  htmlVocab,
  cssVocab
} from '../../api/vocabData';
import { showVocab } from '../../pages/vocabCard';

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

  // FIXME: STUDENTS Create an event listener for the Authors
  // 1. When a user clicks the authors link, make a call to firebase to get all authors
  // 2. Convert the response to an array because that is what the makeAuthors function is expecting
  // 3. If the array is empty because there are no authors, make sure to use the emptyAuthor function
  // document.querySelector('language2').addEventListener('click', () => {
  //   // getAuthors(`${firebase.auth().currentUser.uid}`).then(showAuthors);
  // });

  // document.querySelector('#lagnuage3').addEventListener('click', () => {
  //   // getFavAuthors(`${firebase.auth().currentUser.uid}`).then(showAuthors);
  // });

  // // STRETCH: SEARCH
  // document.querySelector('#search').addEventListener('keyup', (e) => {
  //   const searchValue = document.querySelector('#search').value.toLowerCase();
  //   console.warn(searchValue);
};

export default navigationEvents;
