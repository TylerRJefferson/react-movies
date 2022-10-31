import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import MovieComponent from './components/MovieComponent';
import './App.css';

function App() {

  const movieInfo = {
    id: "1",
    posterURL: "https://bocacode.com/assets/images/bc-logos/boca-code-rgb-logo-tag-reversed.png",
    title: "Boca Code; The Movie"  
  }

  return (
    <div className="App">
      <Header />
      <MovieComponent movieProp={movieInfo} />
      <MovieList />
      {/* we will change this */}
      <Footer />
    </div>
  );
}

export default App;
