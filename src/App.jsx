import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home/Home'
import {CategoryProductsPage} from './pages/CategoryProductsPage/CategoryProductsPage'
import { PageProduct } from './pages/Product/Product'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/category/:categories" element={<CategoryProductsPage />} />
        <Route path="/product/:id" element={<PageProduct />} />
      </Routes>
    </Router>
  )
} 

export default App
