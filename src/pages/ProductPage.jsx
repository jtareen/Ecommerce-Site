import { useParams, Link } from "react-router-dom"
import { getProduct } from "../assets/data/getData"
import { Product } from '../components/Product/Product';
import './css/productPage.css'
import { capitalizeFirstLetters } from "../utils/utils"
import { Plus, Minus, Heart } from "lucide-react"
import { useEffect, useState } from "react"
import { useGlobalContext } from "../Context/Context";

const ProductPage = () => {
    const { 'product-id': productId } = useParams()
    const [noOfProducts, setNoOfProducts] = useState(null)
    const { addToCart } = useGlobalContext()
    const { product, relatedProducts } = getProduct(productId)

    useEffect(() => {
        setNoOfProducts(1)
    }, [productId])

    const addProduct = () => {
        if (noOfProducts >= 5 || noOfProducts === product.stock.quantity) {
            alert('Can not add more then five Item of same product to cart')
            return
        }
        setNoOfProducts(noOfProducts + 1)
    }

    const subProduct = () => {
        if (noOfProducts <= 1) {
            return
        }
        setNoOfProducts(noOfProducts - 1)
    }

    const addToCartBtnHandler = () => {
        addToCart(product, noOfProducts)
        setNoOfProducts(1)
    }

    return <main>
        <p className="breadcrumb">
            <Link to='/'>Home</Link>
            &nbsp;/&nbsp;
            <Link to='/products'>Products</Link>
            &nbsp;/&nbsp;
            <Link to={`/products/${product.category}`}>{product.category}</Link>
            &nbsp;/&nbsp;
            <span>{product.name}</span>
        </p>
        <section className="product-grid">
            <div className="img-grid">
                <img src={product?.images[0]?.url} alt={product?.images[0]?.altText} />
            </div>
            <div className="info-gird">
                <h4 >{product.name}</h4>
                <p>
                    <span style={{
                        color: 'var(--Text-1)'
                    }}>{"("}{product.ratings.totalReviews} Reviews{")"}&nbsp;&nbsp;
                    </span> |
                    <span style={{
                        color: 'var(--Button-1)'
                    }}>
                        &nbsp;&nbsp;{capitalizeFirstLetters(product.stock.availability)}
                    </span>
                </p>
                <p className="price">
                    <span >
                        ${product.discount ? (product.price - (product.price * (product.discount / 100))).toFixed(2) : product.price}
                    </span>
                    {product.discount && <span style={{
                        color: 'var(--Text-1)',
                        textDecoration: 'line-through',
                    }}>
                        ${product.price.toFixed(2)}
                    </span>}
                </p>
                <p className="description">{product.description}</p>
                <hr />
                <div className="buttons">
                    <div>
                        <button className="product-page-btn minus-button" onClick={subProduct}>
                            <Minus />
                        </button>
                        <p>{noOfProducts}</p>
                        <button className="product-page-btn plus-button" onClick={addProduct}>
                            <Plus color="#F5F5F5" />
                        </button>
                    </div>
                    <button className="btn buy-btn" onClick={addToCartBtnHandler}>Buy Now</button>
                    <button className="wishlist-add-button">
                        <Heart />
                    </button>
                </div>
            </div>
        </section>
        <section>
            <h6 className="related-products"><div style={{
                display: "inline-block",
                height: '30px',
                width: '10px',
                backgroundColor: 'var(--secondary-2)',
                marginRight: '10px',
                borderRadius: '2px'
            }}></div>
                Related Products</h6>
            <div className='scrollable-product-container'>
                {relatedProducts.map((product, index) => {
                    return (
                        <article key={index} className='scrollable-product'>
                            <Product product={product} />
                        </article>
                    )
                })}
            </div>
        </section>
    </main>
}

export default ProductPage