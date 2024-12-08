import { useParams } from "react-router-dom";

export function Product() {
    const { id } = useParams();

    return (
        <div>
            <h2>Detalhes do produto</h2>
            <p>
                Produto <strong>"{id}"</strong>: Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Tempore, possimus. Hic eaque ab
                laborum velit, a repellendus ducimus, illo voluptatum earum amet
                voluptas, perferendis est? Provident beatae molestiae aliquam a?
            </p>
        </div>
    );
}
