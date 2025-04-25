import React from 'react';
import MovieList from './MovieList';
import './App.css'; // Import custom styles

function App() {
  return (
    <div className="app-container">
      <div className="overlay">
        <h1 className="app-title">🎬 Movie Database</h1>
        <MovieList />
      </div>
    </div>
  );
}

export default App;
