import { useParams } from "react-router";

export function Produto() {
    const { id } = useParams();

    return (
        <div>
            <h1>Produto: {id}</h1>
        </div>
    );
}
