import clearDom from '../../utils/sample_data/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectLanguage from './selectLanguage';

// form for adding a new vocab component, but only with the options for language that the user has created so far.
const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group" id="select-language"></div>
      <div class="form-group">
        <label for="title">Definition</label>
        <input type="text" class="form-control" id="description" placeholder="Enter Description" value="${obj.description || ''}" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Vocab</button>
      <button type="button" id="addLanguage" class="btn btn-primary mt-3">Add New Language</button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectLanguage(`${obj.language || ''}`);
};

export default addVocabForm;
