import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Movies from "./Components/Movies/Movies";
import SingleMovie from "./Components/Movies/SingleMovie";

const showApi = "https://api.tvmaze.com/search/shows?q=all";

function App() {
  const [movies, setMovies] = useState([]);

  const [toggle, setToggle] = useState(false);

  const [name,setName] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(showApi);

      const data = await res.json();

      setMovies(data);
    };

    fetchData();
  }, []);



  let filteredMovie = movies.filter(movie => movie.show.name === name)
  filteredMovie = filteredMovie[0]
  

  return (
    <>
      <Navbar />
      {toggle ? (
        <SingleMovie setToggle={setToggle} movie={filteredMovie.show} />
      ) : (
        <Movies movies={movies} setToggle={setToggle} setName={setName}/>
      )}
    </>
  );
}

export default App;
