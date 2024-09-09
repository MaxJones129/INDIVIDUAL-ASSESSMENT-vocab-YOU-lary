import firebase from 'firebase';
import { getVocab } from '../../api/vocabData';
import renderToDOM from '../../utils/renderToDom';

// takes all individual languages from the created array and puts it on a dropdown list inside of addVocabForm.js
const selectLanguage = (vocabId) => {
  let domString = `<label for="vocab">Select a Language</label>
    <select class="form-control" id="language" required>
    <option value="">Select a Language</option>`;

  getVocab(`${firebase.auth().currentUser.uid}`).then((vocabArray) => {
    vocabArray.forEach((vocab) => {
      domString += `
            <option
              value="${vocab.language}"
              ${vocabId === vocab.firebaseKey ? 'selected' : ''}>
                ${vocab.language}
            </option>`;
    });
    domString += '</select>';
    // console.warn(document.querySelectorAll('#language > option'));
    renderToDOM('#select-language', domString);
    const options = [];
    document.querySelectorAll('#language > option').forEach((language) => {
      console.warn(options);
      if (options.includes(language.value)) {
        language.remove();
      } else {
        options.push(language.value);
      }
      // console.warn(options);
    });
  });
  console.warn(document.querySelectorAll('#language > option'));
  // console.warn(options);
  // } else {
  //     getVocab(`${firebase.auth().currentUser.uid}`).then((vocabArray) => {
  //       vocabArray.forEach((vocab) => {
  //         domString += `
  //             <option
  //               value="${vocab.language}"
  //               ${vocabId === vocab.firebaseKey ? 'selected' : ''}>
  //                 ${vocab.language}
  //             </option>`;
  //       });
  //     });
  //   }
  // });
};

export default selectLanguage;
