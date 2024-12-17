import { useEffect, useState } from "react";
import API from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";

export function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadAPI() {
            try {
                const response = await API.get("movie/now_playing", {
                    params: {
                        api_key: "",
                        language: "pt-BR",
                        page: 1,
                    },
                });
                setMovies(response.data.results.slice(0, 10));
                setLoading(false);
            } catch (error) {
                console.log(`Erro: ${error}.`);
                setLoading(false);
            }
        }

        loadAPI();
    }, []);

    return (
        <div className="container">
            {loading ? (
                <>
                    <h2>Carregando Filmes...</h2>
                </>
            ) : (
                <div className="list-movies">
                    {movies.map((movie) => (
                        <article key={movie.id}>
                            <h2>{movie.title}</h2>
                            <div>
                                <img
                                    src={`https://tmdb.org/t/p/original/${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <Link to={`movie/${movie.id}`}>Acessar</Link>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </div>
    );
}
