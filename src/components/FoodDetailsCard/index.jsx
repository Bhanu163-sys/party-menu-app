import {Link, useParams, Navigate} from 'react-router-dom'
import {FaLongArrowAltLeft} from 'react-icons/fa'

import {useSaveRecipe} from '../../context/SaveRecipeContext'

import menuData from '../../data/menuData'

import './index.css'

const FoodDetailsCard = () => {
  const {id} = useParams()

  const {
    isRecipeSaved,
    toggleSaveRecipe,
  } = useSaveRecipe()

  const foodDetails = menuData.find(
    item => item.id === Number(id)
  )

  if (!foodDetails) {
    return <Navigate to="/" replace />
  }

  const {
    name,
    image,
    category,
    isVeg,
    fullDescription,
    ingredients,
    servings,
  } = foodDetails

  return (
    <li className="list-details-item">
      <div className="food-details-header-con">

        <Link
          to="/"
          className="details-link-item"
        >
          <button
            type="button"
            className="back-btn"
          >
            <FaLongArrowAltLeft className="arrow-icon" />

            <span className="back-btn-para">
              Back to Menu
            </span>
          </button>
        </Link>

        <div className="saved-recipes-con">

          <Link
            to="/saved-recipes"
            className="details-lin-item"
          >
            <button
              type="button"
              className="saved-recipes-btn"
            >
              Saved Recipes
            </button>
          </Link>

          <button
            type="button"
            className={`save-btn ${
              isRecipeSaved(foodDetails.id)
                ? 'saved-btn'
                : ''
            }`}
            onClick={() => toggleSaveRecipe(foodDetails)}
          >
            {isRecipeSaved(foodDetails.id)
              ? '✓ Saved'
              : 'Save Recipe'}
          </button>

        </div>

      </div>

      <div className="image-description-para">

        <img
          src={image}
          alt={name}
          className="food-details-image"
        />

        <div className="food-details-con">

          <div className="category-con">

            <span className="category-span">
              {category}
            </span>

            <span
              className={`category-span ${
                isVeg ? 'veg' : 'non-veg'
              }`}
            >
              {isVeg ? 'Veg' : 'Non-Veg'}
            </span>

          </div>

          <h1 className="food-details-name">
            {name}
          </h1>

          <p className="servings-para">
            {servings}
          </p>

          <p className="food-details-description">
            {fullDescription}
          </p>

        </div>

      </div>

      <div className="ingredients-con">

        <h2 className="ingredients-heading">
          Ingredients
        </h2>

        <ul className="ingredients-list">
          {ingredients.map((ingredient, index) => (
            <li
              key={index}
              className="ingredient-item"
            >
              <p>{ingredient.name}</p>

              <p>{ingredient.quantity}</p>
            </li>
          ))}
        </ul>

      </div>
    </li>
  )
}

export default FoodDetailsCard