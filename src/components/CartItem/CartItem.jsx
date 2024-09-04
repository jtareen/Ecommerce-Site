import { ChevronDown, ChevronUp, Type, X } from 'lucide-react'

const CartItem = ({
    item: {id , name, imgUrl, price, quantity },
    dispatch
}) => {

    const increaseQuantity = () => {
        if(quantity < 5){
            dispatch({type: 'INCREASE-QUANTITY', payload: id})
        }
        else{
            alert('Can not order more then five Item of this product')
        }
    }

    return <tr className='row'>
        <td className='vertical-align'>
            <figure>
                <img src={imgUrl} alt={name} width="50px" />
                <button className='remove-from-cart-btn' onClick={() => dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: id
                })}><X size={16} /></button>
            </figure>
            {name}
        </td>
        <td>${price}</td>
        <td>
            <div className='quantity-cell'>
                {quantity}
                <div>
                    <button className='vertical-align' onClick={increaseQuantity}><ChevronUp size={16} /></button>
                    <button className='vertical-align' onClick={() => dispatch({type: 'DECREASE-QUANTITY', payload: id})}><ChevronDown size={16} /></button>
                </div>
            </div>
        </td>
        <td>${(quantity * price).toFixed(2)}</td>
    </tr>;
}

export default CartItem