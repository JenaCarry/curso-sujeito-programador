import { Link } from "react-router";
import Logo from "/vite.svg";
import "./header.css";

export function Header() {
    return (
        <header>
            <Link to="/">
                <img src={Logo} alt="Logo" />
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
