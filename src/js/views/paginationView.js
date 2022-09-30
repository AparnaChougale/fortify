import icons from 'url:../../img/icons.svg';
import View from './view.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandleClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    //  Page 1, and there are other pages
    if (currentPage === 1 && numPages > 1) {
      return `${this._generateMarkupButtonNext(currentPage, numPages)}`;
    }

    //  Last page
    if (currentPage === numPages && numPages > 1) {
      return `${this._generateMarkupButtonPrev(currentPage, numPages)}`;
    }

    //  Other page
    if (currentPage < numPages) {
      return `${this._generateMarkupButtonNext(
        currentPage,
        numPages
      )}${this._generateMarkupButtonPrev(currentPage, numPages)}`;
    }

    //  Page 1, and there are NO other pages
    return ` `;
  }

  _generateMarkupButtonNext(currentPage, numPages) {
    return `<button data-goto="${
      currentPage + 1
    }" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1} / ${numPages}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
  }

  _generateMarkupButtonPrev(currentPage, numPages) {
    return `<button data-goto="${
      currentPage - 1
    }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1} / ${numPages}</span>
          </button>`;
  }

  // _numOfPages(currentPage, numPages) {
  //   return `<span class="btn--inline>Page ${currentPage}</span>`;
  // }
  // ${this._numOfPages(currentPage, numPages)} to be called in returns
}

export default new PaginationView();
