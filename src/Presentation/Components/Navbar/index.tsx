import "./navbar.styles.scss";

import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/images/crown.svg";
import { RouteName } from "../../utils";

export const Navbar = () => {
  return (
    <>
      <nav>
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>

        <ul>
          <li>
            <Link to={RouteName.shop}>Shop</Link>
          </li>
          <li>
            <Link to={RouteName.login}>Sign in</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
