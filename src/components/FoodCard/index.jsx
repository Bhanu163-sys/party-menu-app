import {Link} from 'react-router-dom'

import './index.css'

const FoodCard = props => {
  const {cardDetails} = props

  const {
    id,
    name,
    category,
    isVeg,
    servings,
    image,
    description,
  } = cardDetails

  return (
    <li className="food-card-item">
      <Link to={`/menu/${id}`} className="food-card-link">
        <div className="card-con">
          <div className="image-con">
            <img
              src={image}
              alt={name}
              className="card-image"
            />

            <p
              className={
                isVeg ? 'veg-badge' : 'non-veg-badge'
              }
            >
              {isVeg ? 'VEG' : 'NON-VEG'}
            </p>
          </div>

          <div className="card-details">
            <p className="category-para">
              {category.toUpperCase()}
            </p>

            <h1 className="food-name">
              {name}
            </h1>

            <p className="food-description">
              {description}
            </p>

            <p className="servings">
              {servings}
            </p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default FoodCard