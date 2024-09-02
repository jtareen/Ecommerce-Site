import { useParams } from "react-router-dom"
import { getProduct } from "../assets/data/getData"
import { Product } from '../components/Product/Product';
import './css/productPage.css'
import { capitalizeFirstLetters } from "../js funcions/script"
import { Plus, Minus, Heart } from "lucide-react"
import { useState } from "react"
import { useGlobalContext } from "../Context";

const ProductPage = () => {
    const { 'product-id': productId } = useParams()
    const [noOfProducts, setNoOfProducts] = useState(1)
    const {dispatch} = useGlobalContext()
    const { product, relatedProducts } = getProduct(productId)

    const addProduct = () => {
        if (noOfProducts === product.stock.quantity) {
            alert('No more Stock Available')
            return
        }
        setNoOfProducts(noOfProducts + 1)
    }

    const subProduct = () => {
        if (noOfProducts === 0) {
            return
        }
        setNoOfProducts(noOfProducts - 1)
    }

    return <main>
        <p style={{
            fontFamily: 'var(--Secondary-font)',
            color: 'var(--Text-1)'
        }}>Home / {product.category} /  <span style={{
            color: 'var(--Text-2)'
        }}>{product.name}</span></p>
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
                    <button className="btn buy-btn" onClick={() => dispatch({type: 'ADD_TO_CART', payload: {product, quantity: noOfProducts}})}>Buy Now</button>
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