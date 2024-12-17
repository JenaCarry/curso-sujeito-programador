import { Link } from "react-router-dom";
import "./header.css";

export function Header() {
    return (
        <header>
            <Link to="/" className="logo">
                Prime Flix
            </Link>
            <Link to="/favorites" className="favorites">
                Meu Filmes
            </Link>
        </header>
    );
}
