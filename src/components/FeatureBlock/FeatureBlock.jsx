import './style.css'
import { Truck , Headset , SquareCheckBig } from 'lucide-react'

const FeatureBlock = () => {
    return <section className='feature-block'>
        <article>
            <div>
                <figure>
                <Truck color="#ffffff" size={35} />
                </figure>
            </div>
            <p  style={{fontWeight: 'bolder'}}>FREE AND FAST DELIVERY</p>
            <p>Free delivery for all orders over 140$</p>
        </article>
        <article>
            <div>
                <figure>
                <Headset color="#ffffff" size={35} /> 
                </figure>
            </div>
            <p style={{fontWeight: 'bolder'}}>24/7 CUSTOMER SERVICE</p>
            <p>Friendly 24/7 customer service</p>
        </article>
        <article>
            <div>
                <figure>
            <SquareCheckBig color="#ffffff"  size={35} />
                </figure>
            </div>
            <p style={{fontWeight: 'bolder'}}>MONEY BACK GUARANTEE</p>
            <p>We return money within 30 days</p>
        </article>
    </section>
}

export default FeatureBlock