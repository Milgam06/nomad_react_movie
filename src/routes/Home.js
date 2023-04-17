import { useEffect, useState } from 'react';
import Movie from '../components/movie';
import styles from './Home.module.css';
import { useParams } from 'react-router-dom';
import PageControl from '../components/PageControl';

function Home() {
  const { pg } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=8a34e9ed74095c8677249958ec8262f7&language=en-US&page=${pg}`,
      )
    ).json();
    setMovies(json.results);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
    console.log(pg);
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loading}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.mov}>
          {movies.map((movie, i) => (
            <Movie
              key={i}
              id={movie.id}
              coverImg={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              title={movie.title}
            />
          ))}
        </div>
      )}
      <PageControl />
    </div>
  );
}
export default Home;
