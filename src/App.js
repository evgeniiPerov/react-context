import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import AddMovie from './AddMovie'
import { MovieProvider } from './MovieContext';



function App() {



  //state problem: 
  //build movie list: nav, name, dashboard
  //MovieProvider v MovieContext
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
