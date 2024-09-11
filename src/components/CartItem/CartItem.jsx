import { ChevronDown, ChevronUp, Type, X } from 'lucide-react'
import { useGlobalContext } from '../../Context/Context'

const CartItem = ({ item: {id , name, imgUrl, price, quantity } }) => {
    const {removeCartItem , decreaseCartItemQuantity , increaseCartItemQuantity, showAlert} = useGlobalContext()
    
    const increaseQuantity = () => {
        if (!increaseCartItemQuantity(id)) {
            showAlert('Alert' , 'Can not add more then five Items', 'warning')
        }
    }

    return <tr className='row'>
        <td className='vertical-align'>
            <figure>
                <img src={imgUrl} alt={name} width="50px" />
                <button className='remove-from-cart-btn' onClick={() => {
                    removeCartItem(id)
                    showAlert(name, 'Item removed from cart', 'success-red')
                }}><X size={16} /></button>
            </figure>
            {name}
        </td>
        <td>${price}</td>
        <td>
            <div className='quantity-cell'>
                {quantity}
                <div>
                    <button className='vertical-align' onClick={increaseQuantity}><ChevronUp size={16} /></button>
                    <button className='vertical-align' onClick={() => decreaseCartItemQuantity(id, name)}><ChevronDown size={16} /></button>
                </div>
            </div>
        </td>
        <td>${(quantity * price).toFixed(2)}</td>
    </tr>;
}

export default CartItem