import './styles.css'
import { Product } from '../Product/Product'

const ProductList = ({products}) => {

    return <section className="product-list">
        {products.map((product, index) => {
            return <Product key={index} product={product}>

            </Product>
        })}
    </section>
}

export default ProductList