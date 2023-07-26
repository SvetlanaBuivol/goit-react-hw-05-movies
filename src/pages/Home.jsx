import { useEffect, useState } from "react" 
import { getTrendingMovies } from "services/movieAPI"
import TrendingMovies from "components/Home/TrendingMovies";

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(response => {
            const trendingMovies = response.data.results.map(movie => ({ title: movie.title, id: movie.id }))
            setMovies(trendingMovies); 
        })
    }, [])
    
    return (
        <TrendingMovies movies={movies} />
    )
}

export default Home;