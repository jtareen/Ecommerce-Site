import {Search, ShoppingCart, Heart, Menu, X} from 'lucide-react'
import { useRef } from 'react'

const Nav = () => {
    const navRef = useRef(null)

    const toggleNav = () => {
        navRef.current.classList.toggle('toggle-navbar')
    }

    return (
        <header className="header">
            <nav className="navbar">
                <a>Exclusive</a>
                <button className='icon menu-icon' onClick={toggleNav}>
                    <Menu />
                </button>
                <ul ref={navRef}>
                    <button className='icon' onClick={toggleNav}><X /></button>
                    <li><a>Home</a></li>
                    <li><a>Contact</a></li>
                    <li><a>About</a></li>
                    <li><a>Sign Up</a></li>
                </ul>
            </nav>
            <div>
                <label className="search-bar">
                    <input type="text" placeholder="What are you looking for?" />
                    <button className="icon" aria-label="Search">
                        <Search />
                    </button>
                </label>
                <button className="icon" aria-label="Wishlist">
                    <Heart />
                </button>
                <button className="icon" aria-label="Cart">
                    <ShoppingCart />
                </button>
            </div>
        </header>
    )
}

export default Nav