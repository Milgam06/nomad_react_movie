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
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setGmovie(json.data.movie);
    setLoading(false);
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
          <img className={styles.imaging} src={gmovie.medium_cover_image} alt="img"></img>
          <h1 className={styles.title}>{gmovie.title}</h1>
          <h4 className={styles.genre}>
            {gmovie.genres.map((item) => (
              <span>{item} | </span>
            ))}
          </h4>
          <div className={styles.summaryBox}>
            <h3 className={styles.summaryContent}>{gmovie.description_full}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Detail;
