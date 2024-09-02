import a_001 from '../assets/images/products/a_001.webp'
import a_002 from '../assets/images/products/a_002.webp'
import { ChevronDown, ChevronUp } from 'lucide-react'
import './css/cart.css'
import { useGlobalContext } from '../Context'

const Cart = () => {
    const {state} = useGlobalContext()
    const {cartItems} = state

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
                    return (
                        <tr key={index}>
                            <td className='vertical-align'>
                                <figure>
                                    <img src={item.imgUrl} alt={item.name} width="50px" />
                                </figure>
                                {item.name}
                            </td>
                            <td>${item.price}</td>
                            <td>
                                <div className='quantity-cell'>
                                    {item.quantity}
                                    <div>
                                        <button className='vertical-align'><ChevronUp size={16} /></button>
                                        <button className='vertical-align'><ChevronDown size={16} /></button>
                                    </div>
                                </div>
                            </td>
                            <td>${item.quantity * item.price}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </main>
}

export default Cart