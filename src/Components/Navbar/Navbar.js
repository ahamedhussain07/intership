import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={classes.navbar}>
        <div>Book <span style={{color:"#f84464"}}>My Show</span></div>
      </nav>
    </>
  );
};

export default Navbar;
