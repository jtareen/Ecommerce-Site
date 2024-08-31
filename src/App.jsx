import './App.css'
import Home from './pages/Home'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductPage from './pages/ProductsPage'


function App() {
  return (
    <Router>
      <Nav />
      <hr />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<ProductPage />} ></Route>
        <Route path='/products/:category' element={<ProductPage />} ></Route>
      </Routes>

      <hr />
      <Footer />
    </Router>
  )
}

export default App
 