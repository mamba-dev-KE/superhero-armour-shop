import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faUser,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {
  return (
    <nav className="nav max-w-[100rem] h-20 mx-auto flex justify-between items-center">
      <div className="nav__logo">SuperHero Duka</div>
      <div className="nav__content flex gap-6">
        <ul className="nav__items flex gap-3">
          {['All', 'Male', 'Female'].map((item) => (
            <li key={item} className="nav__item cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
        <div className="nav__cart flex gap-6">
          {[faSearch, faCartShopping, faUser].map((icon, index) => (
            <FontAwesomeIcon key={index} icon={icon} />
          ))}
        </div>
      </div>
    </nav>
  );
};
