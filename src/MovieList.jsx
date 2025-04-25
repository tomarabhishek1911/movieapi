import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://dummyapi.online/api/movies')
      .then(response => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch movies.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <ol className="space-y-4 list-decimal list-inside">
      {movies.map((movie, index) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ol>
  );
};

export default MovieList;