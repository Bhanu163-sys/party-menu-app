import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import './index.css'

const FoodDetailsCard = props => {
    const { foodDetails } = props
    const {name, image, category, isVeg, fullDescription, ingredients, servings} = foodDetails
    return (
        <li className="list-details-item">
            <div className="food-details-header-con">
                <Link className="details-link-item" to="/">
                    <button type="button" className="back-btn">
                        <FaLongArrowAltLeft className="arrow-icon" /> 
                        <span className="back-btn-para">Back to Menu</span>
                    </button>
                </Link>
                <div className="saved-recipes-con">
                    <Link className="details-lin-item" to="/saved-recipes">
                      <button className="saved-recipes-btn" type="button">
                        Saved Recipes
                      </button>
                    </Link>
                    <button type="button" className="toggle-save-btn">
                        Save Recipe
                    </button>
                </div>
            </div>
            <div className="image-description-para">
                <img src={image} alt={name} className="food-details-image" />
                <div className="food-details-con">
                    <div className="category-con">
                        <span className="category-span">
                            {category}
                        </span>
                        <span className={`category-span ${isVeg ? 'veg' : 'non-veg'}`}>
                            {isVeg ? 'Veg' : 'Non-Veg'}
                        </span>
                    </div>
                    <h1 className="food-details-name">{name}</h1>
                    <p className="servings-para">{servings}</p>
                    <p className="food-details-description">{fullDescription}</p>
                </div>
            </div>
            <div className="ingredients-con">
                <h2 className="ingredients-heading">Ingredients</h2>
                <ul className="ingredients-list">
                    {ingredients.map((ingredient, index) => (
                        <li key={index} className="ingredient-item">
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