import { useParams , Link } from "react-router-dom"
import Categories from "../components/Categories/Categories"
import ProductList from "../components/ProductList.jsx/ProductList"
import { getAllProducts } from "../assets/data/getData"
import './css/productsPage.css'

const ProductsPage = () => {
    const { category } = useParams()
    const products = getAllProducts(category)

    return <main >
        <p className="breadcrumb">
            <Link to='/'>Home</Link>
            &nbsp;/&nbsp;
            {category ? (
            <>
                <Link to='/products'>Products</Link>
                &nbsp;/&nbsp;
                <span>{category}</span>
            </>
        ) : (
            <span>Products</span>
        )}</p>
        <Categories />
        <ProductList products={products} />
    </main>
}



export default ProductsPage