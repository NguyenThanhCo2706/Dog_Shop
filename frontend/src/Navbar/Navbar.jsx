import "./navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/dogs">Dog</Link>
                <Link to="/checkout">My Cart</Link>
            </nav>
        </>
    );
}

export default Navbar;