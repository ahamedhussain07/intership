import classes from "./MovieItem.module.css";

const MovieItem = ({
  image,
  name,
  genres,
  rating,
  premiered,
  setToggle,
  setName,
}) => {
  const toggleHandler = (e) => {
    setName(e.target.value);
    setToggle(true);
  };

  return (
    <>
      <li className={classes.movieList}>
        <img src={image} alt="movieImage" />
        <div className={classes.movieContent}>
          <div style={{ fontSize: "1.5rem" }}>{name}</div>
          <div>Rating : {!rating ? "No rating" : rating}</div>
          <div>Genres : {genres && genres.join(", ")}</div>
          <div>premiered : {premiered}</div>
          <button
            value={name}
            className={classes.movieItemBtn}
            onClick={toggleHandler}
          >
            View
          </button>
        </div>
      </li>
    </>
  );
};

export default MovieItem;
