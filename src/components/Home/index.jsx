import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import Header from '../Header'
import FiltersGroup from '../FiltersGroup'
import FoodItemGrid from '../FoodItemGrid'

import { useAuth } from '../../context/AuthContext'
import menuData from '../../data/menuData'

import './index.css'

const categoryList = [
  'All',
  'Starter',
  'Main',
  'Sides',
  'Dessert',
]

const dietList = [
  'All',
  'Veg',
  'Non-Veg',
]

const Home = () => {
  const { isAuthenticated } = useAuth()

  const [activeCategory, setActiveCategory] = useState('All')
  const [activeDiet, setActiveDiet] = useState('All')

  const [searchInput, setSearchInput] = useState('')
  const [searchText, setSearchText] = useState('')

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />
  }

  const onChangeSearchInput = event => {
    setSearchInput(event.target.value)
  }

  const onClickSearch = () => {
    setSearchText(searchInput)
  }

  const filteredRecipes = menuData
    .filter(recipe =>
      activeCategory === 'All'
        ? true
        : recipe.category.toLowerCase() === activeCategory.toLowerCase()
    )
    .filter(recipe =>
      activeDiet === 'All'
        ? true
        : recipe.isVeg === (activeDiet === 'Veg')
    )
    .filter(recipe =>
      recipe.name.toLowerCase().includes(searchText.toLowerCase())
    )
  
  return (
    <div className="home-con">
      <Header />

      <div className="filters-con">
        <h1 className="category-heading">Category</h1>

        <FiltersGroup
          categoryList={categoryList}
          activeCategory={activeCategory}
          onChangeCategory={setActiveCategory}
        />

        <div className="diet-main-con">
          <h1 className="diet-heading">Diet</h1>

          <ul className="diets-list-con">
            {dietList.map(diet => (
              <li
                key={diet}
                className={`diet-list-ele ${
                  activeDiet === diet ? 'active-diet' : ''
                }`}
                onClick={() => setActiveDiet(diet)}
              >
                {diet}
              </li>
            ))}
          </ul>
        </div>

        <div className="input-con">
          <input
            type="search"
            className="search-input"
            placeholder="Search by name (e.g. Chicken)"
            value={searchInput}
            onChange={onChangeSearchInput}
          />

          <button
            type="button"
            className="search-btn"
            onClick={onClickSearch}
          >
            Search
          </button>
        </div>
      </div>
      <FoodItemGrid className="food-item-grid" filteredRecipes={filteredRecipes} />
    </div>
  )
}

export default Home