import SectionHeader from "../SectionHeader"
import { Link } from 'react-router-dom'

const NewArrivals = ({products}) => {

    return <section >
        <SectionHeader title='Featured' subtitle='New Arrivals' />
        <div className="new-arrivals-grid">
            {products.map((product, index) => {
                const clsName = `grid-item grid-item-${index + 1}`
                const link = `/product/${product.id}`
                return <article key={index} className={clsName}>
                <img src={product.images[0]?.url} alt={product.name} />
                <div>
                    <h5>{product.name}</h5>
                    <p>{product.description}</p>
                    <Link to={link}>Shop Now</Link>
                </div>
            </article>
            })}
        </div>
    </section>
}

export default NewArrivals