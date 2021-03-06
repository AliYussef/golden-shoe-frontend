import './Navbar.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Navbar = ({click}) => {
    // const cart = useSelector((state) => state.cart);
    // const {cartItems} = cart;
    //
    // const getCartCount = () => {
    //     return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    // };

    return (
        <nav className="navbar">
            {/*logo*/}
            <div className="navbar__logo">
                <h2>Golden Shoe</h2>
            </div>

            {/*links*/}
            <ul className="navbar__links">
                <li>
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        Cart
                        <span className="cartlogo__badge">0</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>

            {/*menu*/}
            <div className="hamburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar