import SectionHeader from '../SectionHeader';
import { Product } from '../Product/Product';

const Sales = ({ products }) => {
    return (
        <section>
            <SectionHeader title="Today's" subtitle="Flash Sales" topButtons={true} />
            <div className='scrollable-product-container'>
                {products.map((product, index) => {
                    return (
                        <article key={index} className='scrollable-product'>
                            <Product product={product} />
                        </article>

                    )
                })}
            </div>
            <button className='btn' style={{
                display: 'block',
                margin: '0 auto'
            }}>View All Products</button>
        </ section>
    )
}

export default Sales