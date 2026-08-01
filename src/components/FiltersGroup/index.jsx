import './index.css'

const FiltersGroup = props => {
    const {categoryList, activeCategory, onChangeCategory} = props
    return (
        <ul className="filters-group-con">
            {categoryList.map(category => {
                const isActive = category === activeCategory
                const activeClassName = isActive ? 'active category' : 'category'
                return (
                    <li key={category} className={activeClassName} onClick={() => onChangeCategory(category)}>
                        {category}
                    </li>
                )
            })}
        </ul>
    )
}

export default FiltersGroup