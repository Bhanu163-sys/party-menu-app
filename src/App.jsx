import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import SignIn from './components/SignIn'
import FoodDetailsCard from './components/FoodDetailsCard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/menu/:id" element={<FoodDetailsCard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
