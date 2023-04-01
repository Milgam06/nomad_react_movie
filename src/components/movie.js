import propTypes, { string } from 'prop-types';

function Movie({ movieNm, openDt }) {
  return (
    <div>
      <h2>{movieNm}</h2>
      <p>{openDt}</p>
    </div>
  );
}

Movie.propTypes = {
  movieNm: string.isRequired,
  openDt: string.isRequired,
};

export default Movie;
