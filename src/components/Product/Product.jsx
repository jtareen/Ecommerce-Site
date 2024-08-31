import React from "react";
import { Heart} from 'lucide-react'
import { useGlobalContext } from "../../Context";

export function Product({ product }) {

    return (<article className='product'>
        <figure>
            <img src={product.images[0]?.url} alt={product.name} />
            {product.discount && <span>-{product.discount}%</span>}
            <div>
                <button className='btn-3'><Heart size={20} /></button>
            </div>
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
