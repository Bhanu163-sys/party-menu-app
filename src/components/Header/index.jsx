import {Link, useNavigate} from 'react-router-dom'

import {useAuth} from '../../context/AuthContext'
import {useSaveRecipe} from '../../context/SaveRecipeContext'

import './index.css'

const Header = () => {
  const navigate = useNavigate()

  const {logout, user} = useAuth()
  const {savedRecipes} = useSaveRecipe()

  const onClickLogout = () => {
    logout()
    navigate('/signin', {replace: true})
  }

  return (
    <div className="header-con">
      <div className="header-head-con">
        <h1 className="header-head">Party Menu</h1>

        <p className="header-para">
          Welcome, {user?.name}
        </p>
      </div>

      <div className="header-right-con">
        <Link
          className="header-saved-link"
          to="/saved-recipes"
        >
          <button
            type="button"
            className="header-saved-con"
          >
            Saved Recipes

            {savedRecipes.length > 0 && (
              <span className="saved-count-badge">
                {savedRecipes.length}
              </span>
            )}
          </button>
        </Link>

        <button
          type="button"
          className="header-logout-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Header