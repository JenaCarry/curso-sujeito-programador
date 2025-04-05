import { Link } from "react-router";

export function NotFount() {
    return (
        <div>
            <h1>Ops! Essa página não exite...</h1>
            <Link to="/">Acessar página Home</Link>
        </div>
    );
}
