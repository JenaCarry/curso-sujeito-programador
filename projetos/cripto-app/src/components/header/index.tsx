import styles from "./header.module.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router";

export function Header() {
    return (
        <header className={styles.container}>
            <Link to="/">
                <img src={logo} alt="Logo Cripto App" />
            </Link>
        </header>
    );
}
