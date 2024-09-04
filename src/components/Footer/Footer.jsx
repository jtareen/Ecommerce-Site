import './styles.css'
import { Instagram, Twitter, Facebook , Linkedin, SendHorizontal } from 'lucide-react'

const Footer = () => {
    return <footer>
        <div className='footer-item'>
            <h3>Exclusive</h3>
            <h5>Subscribe</h5>
            <p>Get 10% off your first order</p>
            <label htmlFor="email">
                <input type="email" id='email' name="email" placeholder='Enter Your Email' autoComplete='on' />
                <button>
                    <SendHorizontal color="#ffffff" />
                </button>
            </label>
        </div>
        <div className='footer-item'>
            <h5>Support</h5>
            <p>123 street, my city, 387, Pakistan</p>
            <p>example123@email.com</p>
            <p>+92-1234-9876543</p>
        </div>
        <div className='footer-item'>
            <h5>Account</h5>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
        </div>
        <div className='footer-item'>
            <h5>Quick Link</h5>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
        </div>
        <div className='social-links'>
            <ul>
                <li><Instagram color="#ffffff" /></li>
                <li><Facebook color="#ffffff" /></li>
                <li><Twitter color="#ffffff" /></li>
                <li><Linkedin color="#ffffff" /></li>
            </ul>
            <p>Copyright 2022. All right reserved</p>
        </div>
    </footer>
}

export default Footer