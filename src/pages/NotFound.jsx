import { Link, useNavigate } from 'react-router-dom'
import './css/notFound.css'

const NotFound = () => {
    const navigate = useNavigate()

    return <main className='not-found-page'>
        <p className="breadcrumb">
            <Link to='/'>Home</Link>
            &nbsp;/&nbsp;
            <span>404 Error</span>
        </p>
        <section className='empty'>
            <h1>404 not found</h1>
            <p>The page you are looking for does not exist. You may go back to home page</p>
            <button className='btn' onClick={() => navigate('/')}>Back to home page</button>
        </section>
    </main>
}

export default NotFound