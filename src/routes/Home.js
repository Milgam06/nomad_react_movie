import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Movie from './components/movie';

function Home() {
  const KEY = '455b10de026d03f0f6c3f5ebded6fb60';
  const DATE = '20230331';
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
            <Movie key={movie.rnum} movieNm={movie.movieNm} openDt={movie.openDt} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
