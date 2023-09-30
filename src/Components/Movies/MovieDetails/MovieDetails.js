import MovieDetailsHeader from "./MovieDetailsHeader";
import MovieSummary from "./MovieSummary/MovieSummary";
import { Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../../Footer/Footer";

function MovieDetails() {
    const { id } = useParams()
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/api/movie/" + id)
            .then((res) => res.json())
            .then(movies => {
                // ? ThreadPool, MainThread ?
                setMovies(movies);
                console.log(movies)

            }).catch((er) => {
                console.log(er)
            })
    }, []

    )

    return (
        <div>
            <MovieDetailsHeader />
            <MovieSummary movies={movies} />
            {/* <Outlet /> */}
            <Footer />
        </div>
    )
}

export default MovieDetails