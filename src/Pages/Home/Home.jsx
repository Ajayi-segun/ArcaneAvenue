import { NavLink } from "react-router"
import "./Home.css"

export default function Home() {

    return(
        <>
        <section className="banner">
            <div className="cta-wrapper">
            <NavLink to="products" className="cta">Explore Arcane Avenue</NavLink>
            </div>
        </section>
        
        </>
    )
}
