import { Search, ShoppingCart, Heart, Menu, X } from 'lucide-react'
import { useRef, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { useGlobalContext } from '../../Context/Context'
import SearchComponent from '../SearchComponent.jsx/SearchComponent'

const Nav = () => {
    const [ search , setSearch] = useState(false)
    const navRef = useRef(null)
    const { totalCartItems, totalWishlistItems } = useGlobalContext()
    const navigate = useNavigate()

    const toggleNav = () => {
        navRef.current.classList.toggle('toggle-navbar')
    }

    const closeSearch = () => setSearch(false)

    return (
        <>
        <header className="header">
            <nav className="navbar">
                <a>Exclusive</a>
                <button className='icon menu-icon' onClick={toggleNav}>
                    <Menu />
                </button>
                <ul ref={navRef}>
                    <button className='icon' onClick={toggleNav}><X /></button>
                    <li><a onClick={() => navigate('/')}>Home</a></li>
                    <li><a>Contact</a></li>
                    <li><a>About</a></li>
                    <li><a>Sign Up</a></li>
                </ul>
            </nav>
            <div>
                <div className="search">
                    <span onClick={() => setSearch(true)}>What are you looking for?</span>
                    <button className="icon" aria-label="Search" onClick={() => setSearch(true)}>
                        <Search />
                    </button>
                </div>
                <button className="icon" aria-label="Wishlist" onClick={() => navigate('/wishlist')}>
                    <Heart />
                    {totalWishlistItems !== 0 ? <span>{totalWishlistItems}</span> : null}
                </button>
                <button className="icon" aria-label="Cart" onClick={() => navigate('/cart')}>
                    <ShoppingCart />
                    {totalCartItems !== 0 ? <span>{totalCartItems}</span> : null}
                </button>
            </div>
        </header>
        { search && <SearchComponent closeSearch={closeSearch} /> }
        </>
    )
}

export default Nav