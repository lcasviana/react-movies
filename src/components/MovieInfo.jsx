import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MoviesService } from '../services/MoviesService';
import { ArrowLeft, Loading } from './Icons';

export const MovieInfo = (props) => {
  const [movie, setMovie] = useState(undefined);

  useEffect(() => {
    MoviesService.getMovieById(props?.match?.params?.id)
      .then((res) => setMovie(res?.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    !movie
      ? <Loading />
      : <>
        <header className="pa3 flex justify-center">
          <Link to={'/'}>
            <button className="btn btn-outline-dark">
              Voltar <ArrowLeft />
            </button>
          </Link>
        </header>
        <article className="card ma3 flex-row">
          <img src={`http://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie?.title} style={{ width: '200px' }} />
          <div className="card-body">
            <h5 className="card-title"> {movie?.title} </h5>
            <p className="card-text"> {movie?.overview} </p>
            <p className="card-text"> Release Date: {movie?.release_date} </p>
            <p className="card-text"> Average Vote: {movie?.vote_average} / 10 </p>
            <a href={`https://www.imdb.com/title/${movie?.imdb_id}`}> IMDB Page </a>
          </div>
        </article>
      </>
  );
}
