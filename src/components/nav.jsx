import {Search, ShoppingCart, Heart, Menu, X} from 'lucide-react'
import { useState } from 'react'

const Nav = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        <header className="header">
            <nav className="navbar">
                <a>Exclusive</a>
                <button className='icon menu-icon' onClick={() => setIsActive(!isActive)}>
                    {isActive ? <X /> : <Menu />}
                </button>
                <ul className={isActive ? 'toggle-navbar' : ''}>
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