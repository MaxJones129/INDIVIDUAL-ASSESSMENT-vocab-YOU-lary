import firebase from 'firebase';
import { getVocab, createVocab, updateVocab } from '../../api/vocabData';
import { showVocab } from '../../pages/vocabCard';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // waits for submit click on addVocabForm and then uses this function to create new data
    if (e.target.id.includes('submit-vocab')) {
      console.warn('work');
      const [, firebaseKey] = e.target.id.split('--');
      const now = new Date();
      const month = now.getMonth() + 1;
      const day = now.getDay() + 1;
      const hours = now.getHours();
      const minutes = now.getMinutes();
      console.warn(document.querySelector('#language').value);
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language: document.querySelector('#language').value,
        uid: `${firebase.auth().currentUser.uid}`,
        firebaseKey,
        time: `Created on ${day} of ${month} at ${hours}:${minutes}`
      };
      console.warn(document.querySelector('#language').value);
      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateVocab(patchPayload).then(() => {
          getVocab(`${firebase.auth().currentUser.uid}`).then(showVocab);
        });
      });
    }

    // waits for submit click on addLanguageForm and then uses this function to create new data
    if (e.target.id.includes('submit2-vocab')) {
      console.warn('work');
      const [, firebaseKey] = e.target.id.split('--');
      const now = new Date();
      const month = now.getMonth() + 1;
      const day = now.getDay() + 1;
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language: document.querySelector('#createLanguage').value,
        uid: `${firebase.auth().currentUser.uid}`,
        firebaseKey,
        time: `Created on ${day} of ${month} at ${hours}:${minutes}`
      };
      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateVocab(patchPayload).then(() => {
          getVocab(`${firebase.auth().currentUser.uid}`).then(showVocab);
        });
      });
    }
    // waits for edit click on buttons then grabs payload from specified vocab and puts it on an addVocabForm
    if (e.target.id.includes('update-vocab')) {
      console.warn('work');
      const [, firebaseKey] = e.target.id.split('--');
      const now = new Date();
      const month = now.getMonth() + 1;
      const day = now.getDay() + 1;
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language: document.querySelector('#select-language').value,
        uid: `${firebase.auth().currentUser.uid}`,
        firebaseKey,
        time: `Updated on ${day} of ${month} at ${hours}:${minutes}`
      };
      updateVocab(payload).then(() => {
        getVocab(`${firebase.auth().currentUser.uid}`).then(showVocab);
      });
    }
  });
};

export default formEvents;
