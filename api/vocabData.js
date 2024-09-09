import client from '../utils/client';

const endpoint = client.databaseURL;

// uses promise to get all vocab with a uid equal to the user's
const getVocab = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// uses promise to delete specified firebaseKey, therefore deleting the card as it relies on the firebaseKey.
const deleteVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// gets data of specified vocab piece.
const getSingleVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

// uses promise to create vocab and add the entirety of it to the vocab array.
const createVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// uses promise to grab payload specified in formEvents.js and then allow 'PATCHING' or editing of that part of the array.
const updateVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// uses promise to get specified cards that both have the user's uid and tests if the item.language is JavaScript
const jsVocab = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const jsLang = Object.values(data).filter((item) => item.language === 'JavaScript');
      console.warn(jsLang);
      if (data) {
        resolve(jsLang);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// uses promise to get specified cards that both have the user's uid and tests if the item.language is HTML
const htmlVocab = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const htmlLang = Object.values(data).filter((item) => item.language === 'HTML');
      // const lang = document.querySelector('#language');
      console.warn(htmlLang);
      if (data) {
        resolve(htmlLang);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// uses promise to get specified cards that both have the user's uid and tests if the item.language is CSS
const cssVocab = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const cssLang = Object.values(data).filter((item) => item.language === 'CSS');
      // const lang = document.querySelector('#language');
      console.warn(cssLang);
      if (data) {
        resolve(cssLang);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// attempt to sort FAILED
// const getVocabTime = () => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/vocab.json?orderBy="timestamp"`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => resolve(Object.values(response.data)))
//     .catch(reject);
// });

// TODO: STRETCH...SEARCH VOCAB

export {
  getVocab,
  createVocab,
  updateVocab,
  getSingleVocab,
  deleteVocab,
  jsVocab,
  htmlVocab,
  cssVocab,
  // getVocabTime
};
