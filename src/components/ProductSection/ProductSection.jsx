import SectionHeader from '../SectionHeader';
import { Product } from '../Product/Product';

const ProductSection = ({ title, subtitle, products, topButton }) => {
    return (
        <section>
            <SectionHeader title={title} subtitle={subtitle} topButton={topButton} />
            <div className='product-container'>
                {products.map((product, index) => {
                    return <Product product={product} key={index} />
                })}
            </div>
        </ section>
    )
}

export default ProductSection