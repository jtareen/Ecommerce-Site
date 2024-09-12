import { useState } from 'react'
import { getAllProducts } from '../../assets/data/getData'
import ProductList from '../ProductList.jsx/ProductList'
import './styles.css'

const SearchComponent = ({closeSearch}) => {
    const [searchTerm, setSearchTerm] = useState("")
    const products = getAllProducts()

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }

    const filteredProducts = [...products].filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))

    const overlayClickHandle = (event) => {
        if (event.target.classList.contains('search-component')) {
            closeSearch()
        }
    }

    return <section className='search-component' onClick={overlayClickHandle}>
        <div>
            <input type="text" name="search-bar" id="search-bar" placeholder='Search' onChange={handleSearch} />
        </div>
        {searchTerm ? (
            <div className='searched-products'>
                <strong>Products</strong>
                {filteredProducts.length === 0 ? (
                    <>
                        <h2 className='center-text'>No Products Found</h2>
                    </>
                ) : (
                    <ProductList products={filteredProducts} />
                )}
            </div>
        ) : null}
    </section>
}

export default SearchComponent