import clearDom from '../../utils/sample_data/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectLanguage from './selectLanguage';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="image">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group" id="select-language"></div>
      <div class="form-group">
        <label for="title">Definition</label>
        <input type="text" class="form-control" id="description" placeholder="Enter Description" value="${obj.description || ''}" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Vocab</button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectLanguage(`${obj.firebaseKey || ''}`);
};

export default addVocabForm;
