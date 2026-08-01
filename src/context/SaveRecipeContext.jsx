import {createContext, useContext, useEffect, useState} from 'react'

const SaveRecipeContext = createContext()

export const SaveRecipeProvider = ({children}) => {
  const [savedRecipes, setSavedRecipes] = useState(() => {
    try {
      const data = localStorage.getItem('party_saved_recipes')
      return data ? JSON.parse(data) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(
      'party_saved_recipes',
      JSON.stringify(savedRecipes),
    )
  }, [savedRecipes])

  const isRecipeSaved = id =>
    savedRecipes.some(recipe => recipe.id === id)

  const toggleSaveRecipe = recipe => {
    if (isRecipeSaved(recipe.id)) {
      setSavedRecipes(prev =>
        prev.filter(item => item.id !== recipe.id),
      )
    } else {
      setSavedRecipes(prev => [...prev, recipe])
    }
  }

  return (
    <SaveRecipeContext.Provider
      value={{
        savedRecipes,
        isRecipeSaved,
        toggleSaveRecipe,
      }}
    >
      {children}
    </SaveRecipeContext.Provider>
  )
}

export const useSaveRecipe = () => useContext(SaveRecipeContext)