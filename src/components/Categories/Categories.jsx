import { useNavigate } from "react-router-dom"
import SectionHeader from "../SectionHeader"
import { Monitor, Smartphone, Watch, Camera, Headphones, Gamepad2 } from 'lucide-react'

const Categories = () => {
    const navigate = useNavigate()

    return (
        <section>
            <SectionHeader title="Categories" subtitle="Browse By Category" topButtons={true} />
            <div className='scrollable-product-container'>
                <article className='category-card' onClick={() => navigate('/products/computer')}>
                    <figure>
                        <Monitor size={42} />
                        <figcaption style={{ fontSize: '1rem' }}>Computer</figcaption>
                    </figure>
                </article>
                <article className='category-card' onClick={() => navigate('/products/smartphone')}>
                    <figure>
                        <Smartphone size={42} />
                        <figcaption style={{ fontSize: '1rem' }}>SmartPhone</figcaption>
                    </figure>
                </article>
                <article className='category-card' onClick={() => navigate('/products/watch')}>
                    <figure>
                        <Watch size={42} />
                        <figcaption style={{ fontSize: '1rem' }}>Watch</figcaption>
                    </figure>
                </article>
                <article className='category-card' onClick={() => navigate('/products/camera')}>
                    <figure>
                        <Camera size={42} />
                        <figcaption style={{ fontSize: '1rem' }}>Camera</figcaption>
                    </figure>
                </article>
                <article className='category-card' onClick={() => navigate('/products/headphones')}>
                    <figure>
                        <Headphones size={42} />
                        <figcaption style={{ fontSize: '1rem' }}>Headphones</figcaption>
                    </figure>
                </article>
                <article className='category-card' onClick={() => navigate('/products/gaming')}>
                    <figure>
                        <Gamepad2 size={42} />
                        <figcaption style={{ fontSize: '1rem' }}>Gaming</figcaption>
                    </figure>
                </article>
            </div>
        </section>
    )
}

export default Categories