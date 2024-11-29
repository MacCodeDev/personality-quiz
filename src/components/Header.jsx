import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Which Element Are You?</h1>
      <p>(based on completely random things)</p>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/Quiz">Quiz</Link>
      </nav>
    </header>
  );
}
