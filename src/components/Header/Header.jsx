import "./Header.css"
import { NavLink } from "react-router"

export default function Header() {

    return (
        <header className="main-header">
            <div className="header-top bg-paper">
                <div className="header-left">
                    <img className="header-star" src="src/assets/Star.png"></img>
                    <div className="header-deco">
                        <p>TRICKS</p>
                        <p>BOOKS</p>
                        <p>CURIOSITY</p>
                    </div>
                </div>
                <div className="header-middle">
                    <NavLink to="/">
                    <img className="logo" src="src/assets/Logo.png" alt="Arcane Avenue Logo" />
                    </NavLink>
                </div>
                <div className="header-right">
                    <nav className="header-actions">
                        <NavLink to="account" className="header-btn">ACCOUNT</NavLink>
                        <NavLink to="wishlist" className="header-btn">WISHLIST</NavLink>
                        <button className="header-btn">cart { 0 }</button>
                    </nav>

                    <form className="search-form">
                        <input className="simple-input" placeholder="search magic....." />
                        <button className="search-btn">SEARCH</button>
                    </form>



                </div>
            </div>
            <nav className="category-nav">
                <NavLink to="products" className="cat-link">ALL</NavLink>
                <NavLink to="products" className="cat-link">NEW</NavLink>
                <NavLink to="products" className="cat-link">MAGIC TRICK</NavLink>
                <NavLink to="products" className="cat-link">PLAYING CARDS</NavLink>
                <NavLink to="products" className="cat-link">BOOKS</NavLink>
                <NavLink to="products" className="cat-link">COIN MAGIC</NavLink>
                <NavLink to="products" className="cat-link">CLOSE-OP</NavLink>
                <NavLink to="products" className="cat-link">STAGE</NavLink>
                <NavLink to="products" className="cat-link">MENTALISM</NavLink>
                <NavLink to="products" className="cat-link">COLLECTIBLE</NavLink>
                <NavLink to="products" className="cat-link">APPAREL</NavLink>
            </nav>
        </header>
    )
}