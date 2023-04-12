import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [gmovie, setGmovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setGmovie(json.data.movie);
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <img src={gmovie.medium_cover_image} alt="img"></img>
      <h1>{gmovie.title}</h1>
      <h3>{gmovie.description_full}</h3>
    </div>
  );
}

export default Detail;
