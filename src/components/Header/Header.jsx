import { Link } from "react-router-dom";
import "./styles.css";

export const Header = () => {
  return (
    <header className="Header">
      <nav>
        <ul className="NavigationList">
          <li className="NavigationListItem">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
