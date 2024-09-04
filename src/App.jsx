import './App.css'
import Home from './pages/Home'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import ProductPage from './pages/ProductPage'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import ScrollToTop from './components/ScrollToTop'


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <hr />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<ProductsPage />} ></Route>
        <Route path='/products/:category' element={<ProductsPage />} ></Route>
        <Route path='/product/:product-id' element={<ProductPage />} />
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/wishlist' element={<Wishlist />}></Route>
      </Routes>

      <hr />
      <Footer />
    </Router>
  )
}

export default App
 