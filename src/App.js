import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import { UserProvider } from './context/UserContext';
import { MoviesProvider } from './context/MoviesContext';


function App() {

  return (
    <>
      <UserProvider>
        <MoviesProvider>
          <Navbar />
          <MovieList />
        </MoviesProvider>
      </UserProvider>

    </>
  );
}

export default App;
