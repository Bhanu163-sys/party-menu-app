import FoodCard from "../FoodCard";
import "./index.css";

const FoodItemGrid = ({ filteredRecipes }) => {
  if (filteredRecipes.length === 0) {
    return (
      <div className="no-results-container">
        <p className="no-results-text">
          No dishes found. Try different filters.
        </p>
      </div>
    );
  }

  return (
    <ul className="food-item-grid">
      {filteredRecipes.map(recipe => (
        <FoodCard
          key={recipe.id}
          cardDetails={recipe}
        />
      ))}
    </ul>
  );
};

export default FoodItemGrid;