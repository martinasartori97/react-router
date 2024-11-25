import { NavLink } from "react-router-dom";
export default function MainMenu() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">"chi siamo</NavLink>
            <NavLink to="/posts">“posts” </NavLink>

        </nav>
    )
}
