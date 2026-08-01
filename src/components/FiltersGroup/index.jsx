import './index.css'

const FiltersGroup = props => {
  const {
    categoryList,
    activeCategory,
    onChangeCategory,
  } = props

  return (
    <ul className="filters-group-con">
      {categoryList.map(category => {
        const isActive = category === activeCategory

        return (
          <li
            key={category}
            className="filter-item"
          >
            <button
              type="button"
              className={`category-btn ${
                isActive ? 'active-category' : ''
              }`}
              onClick={() => onChangeCategory(category)}
            >
              {category}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default FiltersGroup