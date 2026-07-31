import {BrowserRouter, Routes, Route} from 'react-router-dom'

import SignIn from './components/SignIn'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
