import { Link } from "react-router-dom";
import styles from "./header.module.css";

export function Header() {
    return (
        <header className={styles}>
            <h2>Logo</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </header>
    );
}
