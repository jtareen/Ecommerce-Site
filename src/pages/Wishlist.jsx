import { Link, useNavigate, } from 'react-router-dom'
import { useGlobalContext } from '../Context/Context'
import { Product } from '../components/Product/Product'
import './css/wishlist.css'


const Wishlist = () => {
    const { wishlistItems, totalWishlistItems } = useGlobalContext()
    const navigate = useNavigate()

    const products = Array.from(wishlistItems)

    return <main>
        <p className='breadcrumb'>
            <Link to='/'>Home</Link>
            &nbsp;/&nbsp;
            <span>Wishlist</span>
        </p>

        {products.length === 0 ? (
            <>
                <section className='empty'>
                    <h1>Wishlist is Empty</h1>
                    <p>To add items to wishlist, You may go back to home page</p>
                    <button className='btn' onClick={() => navigate('/')}>Back to home page</button>
                </section>
            </>
        ) : (
            <>
                <div className='wishlist-header'>
                    <p>WishList {`(${totalWishlistItems})`}</p>
                    <button className='btn-4'>Move All To Bag</button>
                </div>
                <div className='scrollable-product-container'>
                    {products.map((product, index) => {
                        return (
                            <article key={index} className='scrollable-product'>
                                <Product product={product[1]} />
                            </article>
                        )
                    })}
                </div>
            </>
        )}

    </main>
}

export default Wishlist