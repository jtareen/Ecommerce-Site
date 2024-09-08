import React from "react";
import { Heart} from 'lucide-react';
import { useGlobalContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

export function Product({ product }) {
    const navigate = useNavigate()
    const {wishlistItems, addToCart , addRemoveWishlist} = useGlobalContext()

    const addToCartHandler = (event) => {
        event.stopPropagation();
        
        addToCart(product , 1)
    }
    
    const addToWishlist = (event) => {
        event.stopPropagation();

        addRemoveWishlist(product)
    }

    return (<article className='product' onClick={() => navigate(`/product/${product.id}`)}>
        <figure>
            <img src={product.images[0]?.url} alt={product.name} />
            {product.discount && <span>-{product.discount}%</span>}
            <div>
                <button className='btn-3' onClick={addToWishlist}>{wishlistItems.has(product.id) ? (<Heart size={20} color="#DB4444" />) : (<Heart size={20} />)}</button>
            </div>
        <button className="btn-2" onClick={addToCartHandler}>Add To Cart</button>
        </figure>
        <p>{product.name}</p>
        <p>
            <span style={{
                color: 'var(--secondary-2)',
                marginRight: '4%',
                fontWeight: 'bold'
            }}>
                ${product.discount ? (product.price - (product.price * (product.discount / 100))).toFixed(2) : product.price}
            </span>
            {product.discount && <span style={{
                color: 'var(--Text-1)',
                textDecoration: 'line-through',
                fontWeight: 'bold'
            }}>
                ${product.price.toFixed(2)}
            </span>}
        </p>
    </article>);
}
