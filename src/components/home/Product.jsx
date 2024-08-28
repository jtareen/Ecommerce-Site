import React from "react";
import { Heart, Eye} from 'lucide-react'


export function Product({ product , scrollable }) {
    return (<article className={scrollable ? 'product-scrollable' : 'product'}>
        <figure>
            <img src={product.image} alt={product.name} />
            <span>-{product.discount_percentage}%</span>
            <div>
                <button className='btn-3'><Heart size={20} /></button>
                <button className='btn-3'><Eye size={20} /></button>
            </div>
        </figure>
        <p>{product.name}</p>
        <p>
            <span style={{
                color: 'var(--secondary-2)',
                marginRight: '4%',
                fontWeight: 'bold'
            }}>
                ${product.price}
            </span>
            <span style={{
                color: 'var(--Text-1)',
                textDecoration: 'line-through',
                fontWeight: 'bold'
            }}>
                ${product.original_price}
            </span>
        </p>
    </article>);
}
