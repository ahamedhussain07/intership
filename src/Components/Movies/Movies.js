import MovieItem from "./MovieItem";

import Card from "../UI/Card/Card";
import classes from "./Movies.module.css";

const Movies = ({ movies,setToggle,setName }) => {
  return (
    <>
      <ul className={classes.content}>
        {movies &&
          movies.map((movie) => (
            <Card key={movie.show.id}>
              <MovieItem
                image={movie.show.image.medium}
                name={movie.show.name}
                rating={movie.show.rating.average}
                genres={movie.show.genres}
                premiered={movie.show.premiered}
                setToggle={setToggle}
                setName={setName}
              />
            </Card>
          ))}

      </ul>
    </>
  );
};

export default Movies;
