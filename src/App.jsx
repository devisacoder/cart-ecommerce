import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home/Home'
import {ProductsByCategoryPage} from './pages/ProductsByCategory/ProductsByCategoryPage'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/category/:categories" element={<ProductsByCategoryPage />} />
      </Routes>
    </Router>
  )
} 

export default App
