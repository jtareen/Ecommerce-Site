import { useParams } from "react-router-dom"
import Categories from "../components/Categories/Categories"
import ProductList from "../components/ProductList.jsx/ProductList"
import { getAllProducts } from "../assets/data/getData"
import './css/productsPage.css'

const ProductsPage = () => {
    const { category } = useParams()
    const products = getAllProducts(category)

    return <main >
        <p style={{
            fontFamily: 'var(--Secondary-font)',
            color: 'var(--Text-1)'
        }}>Home /  {category ? (
            <>
                Products / <span style={{
                    color: 'var(--Text-2)'
                }}>{category}</span>
            </>
        ) : (
            <span style={{
                color: 'var(--Text-2)'
            }}>Products</span>
        )}</p>
        <Categories />
        <ProductList products={products} />
    </main>
}



export default ProductsPage