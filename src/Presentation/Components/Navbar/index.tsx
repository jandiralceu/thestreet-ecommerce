import "./navbar.styles.scss";

import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/images/crown.svg";
import { RouteName } from "../../utils";
import { useUserContext } from "../../contexts";
import { styled } from "@mui/material";

const LogoutButton = styled("button")(() => ({
  border: 'none',
  width: 'fit-content',
  cursor: 'pointer',
  padding: 0,
  textTransform: 'uppercase',
  backgroundColor: 'transparent',
}));

export const Navbar = () => {
  const { authenticated, logout } = useUserContext();
  
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
            {authenticated ? (
              <LogoutButton onClick={logout}>Sign out</LogoutButton>
            ) : (
              <Link to={RouteName.login}>Sign in</Link>
            )}
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
