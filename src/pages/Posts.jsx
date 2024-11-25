import { Link } from "react-router-dom";
import MainMenu from "../components/MainMenu"
export default function Posts() {
    return (
        <>
            <ul>
                <li><Link to="/">Posts 1</Link></li>
                <li><Link to="/about">Posts 2</Link></li>
                <li><Link to="/posts">Posts 3</Link></li>
                <li><Link to="/posts">Posts 4</Link></li>
            </ul>

        </>
    )
}