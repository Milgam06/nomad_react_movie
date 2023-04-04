import propTypes, { string } from 'prop-types';
import React, { useState, useEffect } from 'react';

function Movie({ movieNm, openDt }) {
  Movie.propTypes = {
    movieNm: string.isRequired,
    openDt: string.isRequired,
  };
  return (
    <div>
      <h2>{movieNm}</h2>
      <p>{openDt}</p>
    </div>
  );
}

export default Movie;
