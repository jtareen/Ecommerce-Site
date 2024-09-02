import { useEffect, useRef, useState } from 'react'
import img1 from '../../assets/images/slider/img1.jpg'
import img2 from '../../assets/images/slider/img2.jpg'
import img3 from '../../assets/images/slider/img3.jpg'
import img4 from '../../assets/images/slider/img4.jpg'

const images = [img1, img2, img3, img4]
let counter = 0

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slide = useRef(null)
    const slidePointer = useRef([])

    useEffect(() => {
        slidePointer.current[currentSlide].classList.add('current')

        const timer = setInterval(() => {
            slidePointer.current[currentSlide].classList.toggle('current')
            const nextSlide = (currentSlide + 1) % images.length
            setCurrentSlide(nextSlide)
            slidePointer.current[nextSlide].classList.toggle('current')

            slide.current.src = images[nextSlide]
        }, 5000)

        return () => clearInterval(timer)
    }, [currentSlide])

    return (
        <>
            <div className='slider'>
                <img 
                    className={`slide`}
                    src={images[currentSlide]} 
                    alt="img1" ref={slide} 
                />
                <div className='slide-pointer'>
                    {images.map((_ , index) => {
                        return <span key={index} ref={(el) => slidePointer.current[index]=el}></span>
                    })}
                </div>
            </div>
        </>
    )
}

export default Slider