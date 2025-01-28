import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../services/api";
import "./movie.css";
import { toast } from "react-toastify";

export function Movie() {
    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getDetailsMovie = async () => {
            try {
                const response = await API.get(`movie/${id}`, {
                    params: {
                        api_key: process.env.REACT_APP_API_KEY,
                        language: "pt-BR",
                    },
                });
                setDetails(response.data);
                setLoading(false);
            } catch (error) {
                navigate("/", { replace: true });
                setLoading(false);
                return;
            }
        };
        getDetailsMovie();

        return () => {
            console.log("Componente desmontado!");
        };
    }, [navigate, id]);

    const saveMovies = () => {
        const getAllMovies = localStorage.getItem("@primeflix");

        const savedMovies = JSON.parse(getAllMovies) ?? [];

        const hasMovie = savedMovies.some((movie) => movie.id === details.id);

        if (hasMovie) {
            toast.warn("Esse filme já está salvo em sua lista!");
            return;
        }

        savedMovies.push(details);
        localStorage.setItem("@primeflix", JSON.stringify(savedMovies));
        toast.success("Filme salvo com sucesso!");
    };

    return (
        <div className="details-container">
            {loading ? (
                <>
                    <h2>Carregando Filmes...</h2>
                </>
            ) : (
                <div className="details">
                    <h1>{details.title}</h1>
                    <img
                        src={`https://tmdb.org/t/p/original/${details.backdrop_path}`}
                        alt={details.title}
                    />
                    <h2>Sinopse</h2>
                    <p>{details.overview}</p>
                    <p className="vote-average">
                        Nota: <strong>{details.vote_average}</strong> / 10
                    </p>
                    <div className="buttons">
                        <button onClick={saveMovies}>Salvar</button>

                        <a
                            href={`https://youtube.com/results?search_query=${details.title} Trailer`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Trailer
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}
