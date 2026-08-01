import {Link} from 'react-router-dom'

import SavedRecipeCard from '../SavedRecipeCard'
import {useSaveRecipe} from '../../context/SaveRecipeContext'

import './index.css'

const SavedRecipes = () => {
  const {
    savedRecipes,
    toggleSaveRecipe,
  } = useSaveRecipe()

  return (
    <div className="saved-recipes-page">
      <div className="saved-header">
        <div className='saved-recipe-head'>
          <h1 className="saved-title">
            Saved Recipes
          </h1>

          <p className="saved-count">
            {savedRecipes.length} recipes saved
          </p>
        </div>

        <Link to="/">
          <button
            type="button"
            className="back-menu-btn"
          >
            Back to Menu
          </button>
        </Link>
      </div>

      {savedRecipes.length === 0 ? (
        <div className="empty-view">
          <p className="empty-description">
            No saved recipes yet.
          </p>

          <Link
            to="/"
            className="browse-link"
          >
            Browse the menu
          </Link>
        </div>
      ) : (
        <ul className="saved-recipes-list">
          {savedRecipes.map(recipe => (
            <SavedRecipeCard
              key={recipe.id}
              cardDetails={recipe}
              onRemoveItem={toggleSaveRecipe}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default SavedRecipes