import View from './view.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class CartView extends View {
  _parentElement = document.querySelector('.cart__list');
  _errorMessage =
    'No ingredients added yet. Find a nice recipe and add the ingredients to it :)';
  _message = '';

  _generateMarkup(data) {
    const _data = data;
    // console.log(_data);
    return _data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(ing) {
    console.log(ing);
    return `
        
          <li class="recipe__ingredient preview__ing">
            <div>
              <svg class="recipe__icon">
                <use href="${icons}#icon-check"></use>
              </svg>
            </div>
            <div class="recipe__quantity">
              ${ing.quantity ? new Fraction(ing.quantity).toString() : ''}
            </div>
            <div class="recipe__description">
              <span class="recipe__unit">${ing.unit}</span> ${ing.description}
            </div>
          </li>
        
    `;
  }
}

export default new CartView();

//   <li class="preview">
//     <div>
//       <h4 class="preview__ing">${data}</h4>
//     </div>
//   </li>;
