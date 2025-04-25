import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-1">{movie.movie}</h2>
      <p><span className="font-medium">Rating:</span> {movie.imdb_rating}</p>
      <p><span className="font-medium">Year:</span> {movie.year}</p>
      <p><span className="font-medium">Genre:</span> {movie.genre}</p>
    </div>
  );
};

export default MovieCard;
