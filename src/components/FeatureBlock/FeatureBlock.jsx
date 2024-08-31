import './style.css'

const FeatureBlock = () => {
    return <section className='feature-block'>
        <article>
            <div>
                <img src="" alt="" />
            </div>
            <p  style={{fontWeight: 'bold'}}>FREE AND FAST DELIVERY</p>
            <p>Free delivery for all orders over 140$</p>
        </article>
        <article>
            <div>
                <img src="" alt="" />
            </div>
            <p style={{fontWeight: 'bold'}}>24/7 CUSTOMER SERVICE</p>
            <p>Friendly 24/7 customer service</p>
        </article>
        <article>
            <div>
                <img src="" alt="" />
            </div>
            <p style={{fontWeight: 'bold'}}>MONEY BACK GUARANTEE</p>
            <p>We return money within 30 days</p>
        </article>
    </section>
}

export default FeatureBlock