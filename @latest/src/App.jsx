import { useState } from 'react';
import SearchBar from './assets/Componentes/SearchBar';
import MovieList from './assets/Componentes/MovieList';
import MovieDetail from './assets/Componentes/MovieDetail';
import Loader from './assets/Componentes/Loader';
import ErrorMessage from './assets/Componentes/ErrorMessage';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-inner">
          <span className="app-logo">CineDB</span>
          <SearchBar
            setMovies={setMovies}
            setLoading={setLoading}
            setError={setError}
          />
        </div>
      </header>

      <main className="app-main">
        {loading && <Loader />}

        {!loading && error && <ErrorMessage message={error} />}

        {!loading && !error && movies.length > 0 && (
          <MovieList
                movies={movies}
                onSelect={setSelectedId}
            />
        )}
      </main>

      {selectedId && (
        <MovieDetail imdbID={selectedId} onClose={() => setSelectedId(null)} />
      )}
    </div>
  );
}

export default App;