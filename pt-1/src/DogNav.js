import { Link, NavLink } from "react-router-dom";
import "./DogNav.css"

const DogNav = ({ names }) => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/dogs">All Dogs</NavLink>
                </li>
                {names.map(name => (
                    <li key={name}>
                        <NavLink key={`link-${name}`} to={`/dogs/${name}`}>{name}</NavLink>
                    </li>
                ))}
            </ul>~
        </nav>
    );
}

export default DogNav;