import { useEffect, useState } from 'react';
import { json, useParams } from 'react-router-dom';
import styles from './Detail.module.css';

function Detail() {
  const { id } = useParams();
  const [gmovie, setGmovie] = useState([]);
  const [loading, setLoading] = useState(true);
  // 지금 에러가 생긴 이유는 너가 불러오지도 않은 상태에서 map을 해서 뜨는거임
  // 자 고치는 방법
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=8a34e9ed74095c8677249958ec8262f7&language=en-US`,
      )
    ).json();
    setGmovie(json);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <img
            className={styles.imaging}
            src={`https://image.tmdb.org/t/p/w500${gmovie.poster_path}`}
            alt="img"
          ></img>
          <h1 className={styles.title}>{gmovie.title}</h1>
          <h4 className={styles.genre}>
            {gmovie.genres.map((item) => (
              <span>{item.name} | </span>
            ))}
          </h4>
          <div className={styles.summaryBox}>
            <h3 className={styles.summaryContent}>{gmovie.overview}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Detail;
