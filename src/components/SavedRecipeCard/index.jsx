import {Link} from 'react-router-dom'

import './index.css'

const SaveRecipeCard = props => {
  const {cardDetails, onRemoveItem} = props

  const {
    id,
    name,
    category,
    isVeg,
    servings,
    image,
    description,
  } = cardDetails

  const onClickRemove = () => {
    onRemoveItem(cardDetails)
  }

  return (
    <li className="save-recipe-item">
      <div className="save-recipe-card">
        <Link
          to={`/menu/${id}`}
          className="save-recipe-link"
        >
          <div className="save-recipe-image-container">
            <img
              src={image}
              alt={name}
              className="save-recipe-image"
            />

            <span
              className={
                isVeg
                  ? 'save-recipe-veg-badge'
                  : 'save-recipe-non-veg-badge'
              }
            >
              {isVeg ? 'VEG' : 'NON-VEG'}
            </span>
          </div>

          <div className="save-recipe-details">
            <p className="save-recipe-category">
              {category.toUpperCase()}
            </p>

            <h1 className="save-recipe-name">
              {name}
            </h1>

            <p className="save-recipe-description">
              {description}
            </p>

            <p className="save-recipe-servings">
              {servings}
            </p>
          </div>
        </Link>

        <button
          type="button"
          className="save-recipe-remove-btn"
          onClick={onClickRemove}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default SaveRecipeCard