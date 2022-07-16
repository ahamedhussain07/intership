import { useState } from "react";
import classes from "./Modal.module.css";

const BackDrop = ({ onClose }) => {
  const handler = () => {
    onClose(false);
  };
  return <div className={classes.backdrop} onClick={handler}></div>;
};

const ModelOverlays = ({ movieName, onClose }) => {
  const [user, setUser] = useState({
    username: "",
    tickets: "",
  });

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    onClose(false);
    setUser({});
  };

  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <div>
          <div style={{ fontSize: "2rem" }}>
            {" "}
            Movie Name : <span style={{ color: "#f84464" }}>{movieName}</span>
          </div>
          <div>
            <form onSubmit={submitHandler} className={classes.form}>
              <input
                type="text"
                min="3"
                placeholder="username"
                onChange={handleSubmit}
                name="username"
                value={user.username}
              />
              <input
                type="number"
                min="1"
                placeholder="No. Of Tickets"
                onChange={handleSubmit}
                name="tickets"
                value={user.tickets}
              />
              <div className={classes.btn}>
                <button
                  type="button"
                  onClick={() => {
                    onClose(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={user.username === "" || user.tickets === ""}
                >
                  Proceed
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ onClose, movieName }) => {
  return (
    <>
      <BackDrop onClose={onClose} />
      <ModelOverlays movieName={movieName} onClose={onClose} />
    </>
  );
};

export default Modal;
