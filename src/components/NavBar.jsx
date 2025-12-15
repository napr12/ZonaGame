import logo from '../assets/zonaGame.svg'
import CartWidget from './CartWidget'
import CategoryListContainer from './CategoryListContainer'

function NavBar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    <img src={logo} width="112" height="28" alt="Zona Game Logo" />
                    <h1>Zona Game</h1>
                </a>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <CategoryListContainer/>
            <div className='navbar-end'>
                <div className='navbar-item'>
                    <a href="">
                        <CartWidget />
                    </a>

                </div>

            </div>
        </nav>
    )
}
export default NavBar