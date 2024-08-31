import { useEffect, useRef } from 'react'
import img1 from '../../assets/images/slider/img1.jpg'
import img2 from '../../assets/images/slider/img2.jpg'
import img3 from '../../assets/images/slider/img3.jpg'
import img4 from '../../assets/images/slider/img4.jpg'

const images = [img1, img2, img3, img4]
let counter = 0

const Slider = () => {
    const slide = useRef()
    const slidePointer = useRef([])

    useEffect(() => {
        slidePointer.current[0].classList.add('current')
        const timer = setInterval(() => {
            slidePointer.current[counter].classList.toggle('current')
            counter = (counter + 1) % 4
            slidePointer.current[counter].classList.toggle('current')

            slide.current.src = images[counter]
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    return (
        <>
            <div className='slider'>
                <img className='slide' src={img1} alt="img1" ref={slide} />
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