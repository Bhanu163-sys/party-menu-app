import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import './index.css'
import App from './App'
import {AuthProvider} from './context/AuthContext'
import {SaveRecipeProvider} from './context/SaveRecipeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <SaveRecipeProvider>
       <App />
      </SaveRecipeProvider>
    </AuthProvider>
  </StrictMode>,
)






