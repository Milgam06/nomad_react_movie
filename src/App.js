import React, { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const respone = await fetch(
      'ttps://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year',
    );
    const json = await respone.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect =
    (() => {
      getMovies();
    },
    []);

  console.log(movies);
  return <div>{loading ? <h1>Loading...</h1> : movies.map}</div>;
}

export default App;
