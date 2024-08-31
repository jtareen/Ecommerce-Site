import SectionHeader from '../SectionHeader';
import { Product } from '../Product/Product';

const Sales = ({products ,scrollable = true}) => {
    return (
        <section>
            <SectionHeader title="Today's" subtitle="Flash Sales" topButtons={true} />
            <div className={scrollable ? 'scrollable-product-container' : 'product-container'}>
                {products.map((product, index) => {
                    return (
                        <>
                            {scrollable ? (
                                <article key={index} className='scrollable-product'> 
                                    <Product product={product} /> 
                                </article>
                            ) : (
                                <Product key={index} product={product} />
                            )}
                        </>
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