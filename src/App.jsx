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
import AddToCartAlert from './components/AlertComponent/AddToCartAlert'
import NotFound from './pages/NotFound'
import Alert from './components/AlertComponent/Alert'

function App() {
  return (
    <Router basename='/Ecommerce-Site'>
      <ScrollToTop />
      <Nav />
      <hr />
      <AddToCartAlert />
      <Alert />
      <Routes>
        <Route path='/Ecommerce-Site' element={ <Home /> }></Route>
        <Route path='/products' element={ <ProductsPage /> } ></Route>
        <Route path='/products/:category' element={ <ProductsPage /> } ></Route>
        <Route path='/product/:product-id' element={ <ProductPage /> } />
        <Route path='/cart' element={ <Cart /> }></Route>
        <Route path='/wishlist' element={ <Wishlist /> }></Route>
        <Route path='*' element={ <NotFound /> }></Route>
      </Routes>

      <hr />
      <Footer />
    </Router>
  )
}

export default App
 