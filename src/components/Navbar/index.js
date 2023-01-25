import "./index.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <h1>WTF</h1>
      <div className="nav-options">
        <p>Fitness</p>
        <p>Nutrition</p>
        <p>Gyms</p>
        <p>Become WTF Partner</p>
        <p>About Us</p>
        <button type="button">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
