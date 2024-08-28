import { Product } from './product';
import { ArrowLeft , ArrowRight} from 'lucide-react'

import { products } from '../../data/data'

const Portion = ({ title, subtitle, children, topButton = false, scrollable = false }) => {
    return (
        <section>
            <div className="section-header">
                <span>{title}</span>
                <h2>{subtitle}</h2>
                {topButton ? <button className="btn">View All</button> : (
                    <>
                        <div>
                            <button className="btn-3"><ArrowLeft /></button>
                            <button className="btn-3"><ArrowRight /></button>
                        </div>
                    </>
                )}
            </div>
            <div className={scrollable ? 'product-container-scrollable' : 'product-container'}>
                {products.map((product) => {
                    return (
                        <Product  product={product} scrollable={scrollable}   />
                    )
                })}
            </div>
        </ section>
    )
}

export default Portion