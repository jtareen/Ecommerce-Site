import CartItem from '../components/CartItem/CartItem';
import { useGlobalContext } from '../Context'
import { useNavigate } from 'react-router-dom'
import './css/cart.css'

const Cart = () => {
    const {state, dispatch} = useGlobalContext()
    const navigate = useNavigate()
    const {cartItems} = state
    let subTotal = 0

    return <main>
        <p style={{
            fontFamily: 'var(--Secondary-font)',
            color: 'var(--Text-1)'
        }}>Home / <span style={{
            color: 'var(--Text-2)'
        }}>Cart</span></p>
        <table className='cart-table'>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {cartItems.map((item, index) => {
                    subTotal += item.quantity * item.price

                    return <CartItem key={index} item={item} dispatch={dispatch}  />
                })}
            </tbody>
        </table>
        <section className='cart-bottom-section'>
                    <button className='btn-4' onClick={() => navigate('/')}>Return to Shop</button>
                    <div>
                        <h5>Cart Total</h5>
                        <div><span>Subtotal: </span><span>${subTotal.toFixed(2)}</span></div>
                        <hr />
                        <div><span>Shipping: </span><span>Free</span></div>
                        <hr />
                        <div><span>Total: </span><span>${subTotal.toFixed(2)}</span></div>
                        <hr />
                        <div style={{
                            justifyContent: 'center'
                        }}>
                            <button className='btn'>Proceed to checkout</button>
                        </div>
                    </div>
        </section>
    </main>
}

export default Cart