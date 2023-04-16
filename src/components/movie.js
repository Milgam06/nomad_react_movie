import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './movie.module.css';

function Movie({ coverImg, title, summary, genres, key, id }) {
  return (
    <div>
      <Link className={styles.linkText} to={`/movie/${id}`}>
        <img className={styles.Image} src={coverImg} alt={title} />
        <h2>{title}</h2>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
