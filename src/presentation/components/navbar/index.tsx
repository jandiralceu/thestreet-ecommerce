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
import { AuthService } from "../../../services";
import { AuthRepository } from "../../../repositories";
import { useCallback } from "react";
import { setCurrentUser } from "../../../store/store";
import { selectCurrentUser } from "../../../store/user";
import { selectCartInfo } from "../../../store/cart/cart.selector";

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

const authService = new AuthService(new AuthRepository());

export const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser)
  const { isEmpty, itemsQuantity } = useSelector(selectCartInfo)

  const logout = useCallback(async () => {
    try {
      await authService!.logout();
      dispatch(setCurrentUser(undefined));
    } catch (error: any) {
      console.log(`error ${error?.message}`);
    }
  }, [dispatch])
  
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

          {user.authenticated ? (
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
