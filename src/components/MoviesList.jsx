import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MoviesListHeader } from './MoviesListHeader';
import { MoviesService } from '../services/MoviesService';
import { Loading } from './Icons';

export const MoviesList = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState(undefined);

  useEffect(() => {
    MoviesService.getPopularMovies(page)
      .then((res) => setMovies(res))
      .catch((err) => console.error(err));
  }, [page]);

  return (
    !movies
      ? <Loading />
      : <>
        <MoviesListHeader page={page} setPage={setPage} />
        <main className="pa3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gridGap: '1rem', alignItems: 'stretch' }}>
          {movies?.data?.results?.map((movie, index) => (
            <Link key={index} to={`/movie/${movie?.id}`}>
              <article className="pointer card h-100">
                <img src={`http://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie?.title} />
                <div className="card-body">
                  <h5 className="card-title"> {movie?.title} </h5>
                </div>
              </article>
            </Link>
          ))}
        </main>
      </>
  );
}
