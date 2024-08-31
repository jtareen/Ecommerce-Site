import { useParams } from "react-router-dom"
import Categories from "../components/Categories/Categories"
import ProductList from "../components/ProductList.jsx/ProductList"
import { getAllProducts } from "../assets/data/getData"
import './css/productsPage.css'

const ProductPage = () => {
    const { category } = useParams()
    const products = getAllProducts()

    return <main >
        <Categories />
        <h3>
        {category ? `${category}` : 'All'} Products Page
        </h3>
        <ProductList products={products}/>
    </main>
}

export default ProductPage