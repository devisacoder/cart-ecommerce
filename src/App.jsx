import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import React, { Suspense, lazy } from 'react'

const CategoryProductsPage = lazy(() => import('./pages/CategoryProductsPage/CategoryProductsPage'))
const PageProduct = lazy(() => import('./pages/Product/Product'))

function App() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categories" element={<CategoryProductsPage />} />
          <Route path="/product/:id" element={<PageProduct />} />
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App
