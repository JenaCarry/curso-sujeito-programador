import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./favorites.css";
import { toast } from "react-toastify";

export function Favorites() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getAllMovies =
            JSON.parse(localStorage.getItem("@primeflix")) ?? [];

        setMovies(getAllMovies);
    }, []);

    const handleDelete = (id) => {
        const moviesUpdate = movies.filter((movie) => movie.id !== id);
        setMovies(moviesUpdate);
        localStorage.setItem("@primeflix", JSON.stringify(moviesUpdate));
        toast.success("Filme removido com sucesso!");
    };

    return (
        <div className="favorites-container">
            <h1>Meus Filmes</h1>
            {movies.length === 0 && (
                <p>Você não possui nenhum filme salvo :(</p>
            )}
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <h2>
                            <abbr title={movie.title}>{movie.title}</abbr>
                        </h2>
                        <img
                            src={`https://tmdb.org/t/p/original/${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <div className="favorites-buttons">
                            <Link to={`/movie/${movie.id}`}>Detalhes</Link>
                            <button onClick={() => handleDelete(movie.id)}>
                                Excluir
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
