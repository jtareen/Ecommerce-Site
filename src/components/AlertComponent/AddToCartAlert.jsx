import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../Context/Context'
import './styles.css'
import { Trash2 } from 'lucide-react'

const AddToCartAlert = () => {
    const { cartAlert: {visible, product, quantity} , closeCartAlert , removeCartItem, showAlert } = useGlobalContext()
    const navigate = useNavigate()

    const openCart = () => {
        closeCartAlert()
        navigate('/cart')
    }

    const overlayClickHandle = (e) => {
        if (e.target.classList.contains('custom-alert-overlay')) {
            closeCartAlert();
        }
    }

    if (!visible) return null

    return (
        <div className="custom-alert-overlay" onClick={overlayClickHandle}>
            <div className='alert-container'>
                <div className='alert-header'>
                    <h5>ITEM</h5>
                    <button className='cart-alert-close-btn' onClick={closeCartAlert}>{`Close`.toUpperCase()}</button>
                </div>
                <div className='added-item'>
                    <img src={product.images[0].url} alt={product.images[0].altText} />
                    <div className='added-item-info'>
                        <p>{product.name.toUpperCase()} <br /> {product.brand} <br /> {quantity}X</p>
                        <span>$ {(product.price * quantity).toFixed(2)}</span>
                    </div>
                    <div className='added-item-info-2'>
                        <button className='cart-alert-close-btn' onClick={() => {
                            removeCartItem(product.id)
                            closeCartAlert()
                            showAlert(product.name , 'Item removed from cart', 'success-red')
                        }}>
                        <Trash2 />   
                        </button>
                    </div>
                </div>
                <p>Added To Cart</p>
                <hr />
                <button className='btn' style={{margin: '10px 0'}} onClick={openCart}>View Cart</button>
                <button className='btn-1' onClick={closeCartAlert}>Continue Shopping</button>
            </div>
        </div>
    )
}

export default AddToCartAlert