import firebase from 'firebase';
import { getVocab } from '../../api/vocabData';
import renderToDOM from '../../utils/renderToDom';

const selectVocab = (vocabId) => {
  let domString = `<label for="vocab">Select a Language</label>
    <select class="form-control" id="language" required>
    <option value="">Select a Language</option>`;

  getVocab(`${firebase.auth().currentUser.uid}`).then((vocabArray) => {
    vocabArray.forEach((vocab) => {
      domString += `
          <option 
            value="${vocab.firebaseKey}" 
            ${vocabId === vocab.firebaseKey ? 'selected' : ''}>
              ${vocab.language}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-language', domString);
  });
};

export default selectVocab;
