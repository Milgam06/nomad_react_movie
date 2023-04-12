import { useEffect, useState } from 'react';
import Movie from '../components/movie';
import styles from './Home.module.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.screen}>
      {loading ? (
        <div className={styles.loading}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.mov}>
          {movies.map((movie, i) => (
            <Movie key={i} id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
