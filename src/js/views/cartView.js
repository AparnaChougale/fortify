import View from './view.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';
const Fracty = require('fracty');

class CartView extends View {
  _parentElement = document.querySelector('.cart__list');
  _errorMessage =
    'No ingredients added yet. Find a nice recipe and add the ingredients to it :)';
  _message = '';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(ing) {
    return `
        
          <li class="recipe__ingredient preview__ing">
            <div>
              <svg class="recipe__icon">
                <use href="${icons}#icon-check"></use>
              </svg>
            </div>
            <div class="recipe__quantity">
              ${ing.quantity ? Fracty(ing.quantity).toString() : ''}
            </div>
            <div class="recipe__description">
              <span class="recipe__unit">${ing.unit}</span> ${ing.description}
            </div>
          </li>
        
    `;
  }
}

export default new CartView();
