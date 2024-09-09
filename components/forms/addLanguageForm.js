import clearDom from '../../utils/sample_data/clearDom';
import renderToDOM from '../../utils/renderToDom';
// import selectLanguage from './selectLanguage';

// adds form exactly same as addVocabForm, but have a blank input field for language so that the user cna add their own languages.
// form for adding a new vocab component
const addLanguageForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit2-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="image">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Enter New Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="image">Language</label>
        <input type="text" class="form-control" id="createLanguage" placeholder="Enter New Language" value="${obj.language || ''}" required>
      </div>
      <div class="form-group">
        <label for="title">Description</label>
        <input type="text" class="form-control" id="description" placeholder="Enter New Description" value="${obj.description || ''}" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Language</button>
    </form>`;

  renderToDOM('#form-container', domString);
  // selectLanguage(`${obj.language || ''}`);
};

export default addLanguageForm;
