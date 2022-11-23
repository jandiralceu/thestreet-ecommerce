import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  ShoppingCartRounded as ShoppingCart,
  Person,
  ExitToAppRounded as Logout,
} from "@mui/icons-material";

import { RouteName } from "../../utils";
import { AppLogo } from "../app_logo";
import { useDispatch, useSelector } from "react-redux";
import { selectCartInfo } from "../../../store/cart/cart.selector";
import { selectAuthenticated, signOut } from "../../../store/auth";

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

const StyledNavbar = styled("nav")(({ theme }) => ({
  padding: "40px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "& ul": {
    display: "flex",
    textTransform: "uppercase",

    "& li": {
      fontSize: 14,
    },

    "& li:not(:last-of-type)": {
      marginRight: 24,
    },
  },

  "& .main-menu": {},

  "& .secondary-menu": {
    "& li": {
      "& a": {
        display: "flex",
        alignItems: "center",

        "& .cart-quantity": {
          display: "flex",
          position: "relative",

          "& p": {
            top: -14,
            right: -10,
            padding: 6,
            width: 20,
            height: 20,
            borderRadius: 20,
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            color: "#fff",
            fontSize: 12,
            backgroundColor: theme.palette.error.main,
          },
        },

        "& span": {
          marginLeft: 6,
        },
      },
    },
  },
}));

export const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectAuthenticated);
  const { isEmpty, itemsQuantity } = useSelector(selectCartInfo);
  
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

      <AppLogo />

      <Box>
        <ul className="secondary-menu">
          <li>
            <Link
              to={RouteName.cart}
              style={{
                opacity: isEmpty ? 0.4 : 1,
                transition: "opacity 0.3s ease-in",
              }}
            >
              <Box className="cart-quantity">
                <ShoppingCart sx={{ width: 24 }} />
                {!isEmpty && (
                  <Typography component="p">{itemsQuantity}</Typography>
                )}
              </Box>
              <span>Cart</span>
            </Link>
          </li>

          {isAuthenticated ? (
            <>
              <li>
                <Link to={RouteName.profile}>
                  <Person sx={{ width: 24 }} />
                  <span>Account</span>
                </Link>
              </li>

              <li>
                <LogoutButton onClick={() => dispatch(signOut())}>
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
