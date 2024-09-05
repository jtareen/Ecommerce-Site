import { Link } from 'react-router-dom'
import './css/notFound.css'

const NotFound = () => {
    return <main className='not-found-page'>
        <p className="breadcrumb">
            <Link to='/'>Home</Link>
            &nbsp;/&nbsp;
            <span>404 Error</span>
        </p>
        <section>
            <h1>404 not found</h1>
            <p>The page you are looking for does not exist. You may go back to home page</p>
            <button className='btn'>Back to home page</button>
        </section>
    </main>
}

export default NotFound