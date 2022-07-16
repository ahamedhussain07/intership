import { useState } from "react";

import Modal from "../UI/Modal/Modal";
import classes from "./SingleMovie.module.css";

const SingleMovie = ({ setToggle, movie }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleHandler = () => {
    setToggle(false);
  };

  const bookHandler = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      {modalOpen && <Modal onClose={setModalOpen} movieName={movie.name} />}

      <div className={classes.main}>
        <main className={classes.singleMovie}>
          <img src={movie.image.original} alt="movieImg" />
          <div className={classes.singleContent}>
            <div style={{ fontSize: "3rem" }}>{movie.name}</div>
            <div>
              Rating :{" "}
              {movie.rating.average ? movie.rating.average : "No Rating"}
            </div>
            <div>Language : {movie.language}</div>
            {movie.runtime && <div>Duration : {movie.runtime}m </div>}
            <div>Genres : {movie.genres && movie.genres.join(", ")}</div>
            {movie.schedule.time !== "" && (
              <div>
                Schedule : {movie.schedule.days.join(", ")} (
                {movie.schedule.time})
              </div>
            )}
            <button className={classes.btn} onClick={bookHandler}>
              Book tickets
            </button>
          </div>
        </main>
        <div className={classes.about}>
          <div
            style={{
              fontSize: "1.5rem",
              borderBottom: "2px solid #fff",
              width: "190px",
            }}
          >
            About The Movie
          </div>
          <div className={classes.summary}>
            {movie.summary.replace(/<\/?[^>]+>/gi, "")}
          </div>
        </div>
        <button className={classes.btn} onClick={toggleHandler}>
          Go Back
        </button>
      </div>
    </>
  );
};

export default SingleMovie;
