import logo from '../assets/todoTienda.svg'
import CartWidget from './CartWidget'
import CategoryListContainer from './CategoryListContainer'
import {Link} from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <img src={logo} width="112" height="28" alt="Zona Game Logo" />
                </Link>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <CategoryListContainer/>
            <div className='navbar-item navbar-end'>
                    <Link to="/cart">
                        <CartWidget />
                    </Link>
            </div>
        </nav>
    )
}
export default NavBar