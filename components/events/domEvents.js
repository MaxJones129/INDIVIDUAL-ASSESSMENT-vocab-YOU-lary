import firebase from 'firebase';
import addVocabForm from '../forms/addVocabForm';
import { getSingleVocab, getVocab, deleteVocab } from '../../api/vocabData';
import { showVocab } from '../../pages/vocabCard';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE BOOK', e.target.id);
        const [, firebaseKey] = (e.target.id.split('--'));
        deleteVocab(firebaseKey).then(() => {
          getVocab(`${firebase.auth().currentUser.uid}`).then(showVocab);
        });
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-vocab-btn')) {
      addVocabForm();
    }

    // // TODO: CLICK EVENT EDITING/UPDATING A BOOK
    // if (e.target.id.includes('edit-book-btn')) {
    //   const [, firebaseKey] = e.target.id.split('--');
    //   getSingleBook(firebaseKey).then((bookObj) => addBookForm(bookObj));
    //   // getSingleBook(firebaseKey).then(addBookForm); // using the callback method
    // }

    // // FIXME: ADD CLICK EVENT FOR DELETING AN AUTHOR
    // if (e.target.id.includes('delete-author-btn')) {
    //   // eslint-disable-next-line no-alert
    //   if (window.confirm('Want to delete?')) {
    //     const [, firebaseKey] = e.target.id.split('--');

    //     deleteAuthorBooksRelationship(firebaseKey).then(() => {
    //       getAuthors(`${firebase.auth().currentUser.uid}`).then(showAuthors);
    //     });
    //   }
    // }
    // // ADD CLICK EVENT FOR VIEW AUTHOR DETAILS
    // if (e.target.id.includes('view-author-btn')) {
    //   const [, firebaseKey] = e.target.id.split('--');
    //   getAuthorDetails(firebaseKey).then(viewAuthor);
    // }
    // FIXME: ADD CLICK EVENT FOR EDITING AN AUTHOR
    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(vocabObj));
      // getSingleBook(firebaseKey).then(addBookForm); // using the callback method
    }
  });
};

export default domEvents;
