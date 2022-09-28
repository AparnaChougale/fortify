import * as model from './model.js';
import recipeView from './views/recipeView.js';
import 'core-js/stable'; // Polyfilling everything else
import 'regenerator-runtime/runtime'; // Polyfilling asych and await

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id);

    // guard clause
    if (!id) return;

    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);
    // const { recipe } = model.state;

    // 2) Rendering recipe
    recipeView.render(model.state.recipe); // only class object is exported hence...
    // const recipeView = new recipeView(model.state.recipe); if class were exported
  } catch (err) {
    alert(err);
  }
};
// controlRecipe();

const init = function () {
  recipeView.addHandlerRender(controlRecipe);
};

init();
