import React, { useEffect, useState } from 'react';
import { MoviesService } from '../services/MoviesService';

export const MoviesList = () => {
  const [movies, setMovies] = useState(undefined);

  useEffect(() => {
    MoviesService.getPopularMovies()
      .then((res) => setMovies(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <> {movies ? JSON.stringify(movies) : '...'} </>
  );
}
