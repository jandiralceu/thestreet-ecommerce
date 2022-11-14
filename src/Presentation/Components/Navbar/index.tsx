import { Box, styled } from "@mui/material";
import { Link } from "react-router-dom";
import {
  ShoppingCartRounded as ShoppingCart,
  Person,
  ExitToAppRounded as Logout,
} from "@mui/icons-material";

import { useUserContext } from "../../contexts";
import { DefaultText, RouteName } from "../../utils";

const LogoutButton = styled("button")(() => ({
  border: "none",
  width: "fit-content",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  padding: 0,
  backgroundColor: "transparent",

  "& span": {
    fontSize: 14,
    marginLeft: 6,
    color: "#424242",
  },
}));

const StyledNavbar = styled("nav")((theme) => ({
  padding: "40px 0",
  display: "flex",
  justifyContent: "space-between",

  "& ul": {
    margin: 0,
    padding: 0,
    listStyle: "none",
    boxSizing: "border-box",
    display: "flex",

    "& li": {
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
    },
  },

  "& .main-menu": {
    "& li:not(:last-of-type)": {
      marginRight: 12,
    },
  },

  "& .secondary-menu": {
    "& li": {
      "& a": {
        display: "flex",
        alignItems: "center",

        "& span": {
          fontSize: 14,
          marginLeft: 6,
        },
      },
    },

    "& li:not(:last-of-type)": {
      marginRight: 20,
    },
  },
}));

export const Navbar = () => {
  const { authenticated, logout } = useUserContext();

  return (
    <StyledNavbar>
      <ul className="main-menu">
        <li>
          <Link to={RouteName.home}>Home</Link>
        </li>

        <li>
          <Link to={RouteName.shop}>Shop</Link>
        </li>
      </ul>

      <Link className="logo-container" to="/">
        {DefaultText.appName}
      </Link>

      <Box>
        <ul className="secondary-menu">
          <li>
            <Link to={RouteName.cart}>
              <ShoppingCart sx={{ width: 24 }} />
              <span>Cart</span>
            </Link>
          </li>

          {authenticated ? (
            <>
              <li>
                <Link to={RouteName.profile}>
                  <Person sx={{ width: 24 }} />
                  <span>Account</span>
                </Link>
              </li>

              <li>
                <LogoutButton onClick={logout}>
                  <Logout sx={{ width: 24 }} />
                  <span>Logout</span>
                </LogoutButton>
              </li>
            </>
          ) : (
            <li>
              <Link to={RouteName.login}>
                <Person sx={{ width: 24 }} />
                <span>Login</span>
              </Link>
            </li>
          )}
        </ul>
      </Box>
    </StyledNavbar>
  );
};
