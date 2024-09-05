import { Link } from 'react-router-dom'


const Wishlist = () => {
    return <main>
        <p className='breadcrumb'>
            <Link to='/'>Home</Link>
            &nbsp;/&nbsp;
            <span>Wishlist</span>
        </p>
    </main>
}

export default Wishlist