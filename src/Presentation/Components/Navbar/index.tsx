import './navbar.styles.scss';

import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../Assets/images/crown.svg';

export const Navbar = () => {
  return (
    <>
      <nav>
        <Link className='logo-container' to='/'>
            <CrwnLogo className='logo' />
        </Link>

        <ul>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/auth">Sign in</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
