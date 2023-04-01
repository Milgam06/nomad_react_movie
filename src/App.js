import React, { useState, useEffect } from 'react';

function App() {
  const KEY = '455b10de026d03f0f6c3f5ebded6fb60';
  const DATE = '20220101';
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${DATE}`,
      )
    ).json();
    setMovies(json.boxOfficeResult.dailyBoxOfficeList);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
