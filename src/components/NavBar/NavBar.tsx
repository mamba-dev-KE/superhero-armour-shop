import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <nav className="nav flex text-red-600">
      <div className="nav__logo">SuperHero Duka</div>
      <div className="nav__content">
        <ul className="nav__items">
          <li className="nav__item">All</li>
          <li className="nav__item">Male</li>
          <li className="nav__item">Female</li>
        </ul>
        <div className="nav__cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
    </nav>
  );
};
