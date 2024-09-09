import clearDom from '../utils/sample_data/clearDom';
import renderToDOM from '../utils/renderToDom';

// what to display when you have no vocab
const emptyVocab = () => {
  const domString = '<h1>No Vocab</h1>';
  renderToDOM('#store', domString);
};

// function to convert all specified data from the api into a card to put on the DOM.
const showVocab = (array) => {
  clearDom();

  // sets buttons for adding new vocab and sort (does not work)
  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-vocab-btn">Add Vocab</button><button class="btn btn-success btn-lg mb-4" id="sort-btn">Sort Vocab</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card" style="width: 21rem;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
          <h5 class="card-language">${item.language}</h5>
          <h3 class="card-description">${item.description}</h3>
            <i id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit btn btn-link">Edit</i>
            <i id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-link fas fa-trash-alt">Delete</i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { showVocab, emptyVocab };
