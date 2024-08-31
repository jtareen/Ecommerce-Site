import SectionHeader from '../SectionHeader';
import { Product } from '../Product/Product';

import { products } from '../../assets/data/data'

const ProductSection = ({ title, subtitle, children, topButton, scrollable = false }) => {
    return (
        <section>
            <SectionHeader title={title} subtitle={subtitle} topButton={topButton}  />
            <div className={scrollable ? 'scrollable-product-container' : 'product-container'}>
                {products.map((product, index) => {
                    return (
                        <>
                            {scrollable ? (
                                <article key={index} className='scrollable-product'> 
                                    <Product product={product} /> 
                                </article>
                            ) : (
                                <Product product={product} key={index} />
                            )}
                        </>
                    )
                })}
            </div>
        </ section>
    )
}

export default ProductSection