import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer d-flex justify-content-around mt-2">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Footer
