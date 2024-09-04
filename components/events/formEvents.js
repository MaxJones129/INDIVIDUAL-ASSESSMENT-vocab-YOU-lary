import firebase from 'firebase';
import { getVocab, createVocab, updateVocab } from '../../api/vocabData';
import { showVocab } from '../../pages/vocabCard';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    // if (e.target.id.includes('submit-book')) {
    //   const payload = {
    //     title: document.querySelector('#title').value,
    //     description: document.querySelector('#description').value,
    //     image: document.querySelector('#image').value,
    //     price: document.querySelector('#price').value,
    //     author_id: document.querySelector('#author_id').value,
    //     sale: document.querySelector('#sale').checked,
    //     uid: `${firebase.auth().currentUser.uid}`,
    //   };
    //   createBook(payload).then(({ name }) => {
    //     const patchPayload = { firebaseKey: name };
    //     updateBook(patchPayload).then(() => {
    //       getBooks(`${firebase.auth().currentUser.uid}`).then(showBooks);
    //     });
    //   });
    // }

    // // TODO: CLICK EVENT FOR EDITING A BOOK
    // if (e.target.id.includes('update-book')) {
    //   const [, firebaseKey] = e.target.id.split('--');
    //   const payload = {
    //     title: document.querySelector('#title').value,
    //     description: document.querySelector('#description').value,
    //     image: document.querySelector('#image').value,
    //     price: document.querySelector('#price').value,
    //     author_id: document.querySelector('#author_id').value,
    //     sale: document.querySelector('#sale').checked,
    //     firebaseKey,
    //   };
    //   updateBook(payload).then(() => {
    //     getBooks(`${firebase.auth().currentUser.uid}`).then(showBooks);
    //   });
    // }

    // // FIXME: ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('submit-vocab')) {
      console.warn('work');
      const [, firebaseKey] = e.target.id.split('--');
      const now = new Date();
      const month = now.getMonth() + 1;
      const day = now.getDay() + 1; // returns a number representing the day of the week, starting with 0 for Sunday
      const hours = now.getHours();
      const minutes = now.getMinutes();
      // console.warn(`Today is day ${day} and the time is ${hours}:${minutes}.`);
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language: document.querySelector('#language').value,
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
    // FIXME:ADD CLICK EVENT FOR EDITING AN AUTHOR
    if (e.target.id.includes('update-vocab')) {
      console.warn('work');
      const [, firebaseKey] = e.target.id.split('--');
      const now = new Date();
      const month = now.getMonth() + 1;
      const day = now.getDay() + 1; // returns a number representing the day of the week, starting with 0 for Sunday
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language: document.querySelector('#language').value,
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
