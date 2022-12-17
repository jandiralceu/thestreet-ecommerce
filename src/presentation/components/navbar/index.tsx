import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  ShoppingCartRounded as ShoppingCart,
  Person,
  ExitToAppRounded as Logout,
  MenuRounded as Menu,
} from "@mui/icons-material";

import { RouteName } from "../../utils";
import { AppLogo } from "../app_logo";
import { useDispatch, useSelector } from "react-redux";
import { selectCartInfo } from "../../../store/cart/cart.selector";
import { selectAuthenticated, signOut } from "../../../store/auth";

import {
  StyledNavbar,
  LogoutButton,
  MenuButton,
  Drawer,
} from "./navbar.styles";
import { useState } from "react";

export const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectAuthenticated);
  const { isEmpty, itemsQuantity } = useSelector(selectCartInfo);
  const [toggleDrawer, setToggleDrawer] = useState(false);

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
          <li className="desktop-menu-option">
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
              <li className="desktop-menu-option">
                <Link to={RouteName.profile}>
                  <Person sx={{ width: 24 }} />
                  <span>Account</span>
                </Link>
              </li>

              <li className="desktop-menu-option">
                <LogoutButton onClick={() => dispatch(signOut())}>
                  <Logout sx={{ width: 24 }} />
                  <span>Logout</span>
                </LogoutButton>
              </li>
            </>
          ) : (
            <li className="desktop-menu-option">
              <Link to={RouteName.login}>
                <Person sx={{ width: 24 }} />
                <span>Login</span>
              </Link>
            </li>
          )}

          <li className="mobile-menu-option">
            <MenuButton onClick={() => setToggleDrawer(true)}>
              <Menu sx={{ width: 40, height: 40 }} color="primary" />
            </MenuButton>
          </li>
        </ul>
      </Box>

      <Drawer anchor="right" open={toggleDrawer} onClose={() => setToggleDrawer(false)}>
        <ul>
          <li>
            <Link to={RouteName.home}>Home</Link>
          </li>

          <li>
            <Link to={RouteName.shop}>Shop</Link>
          </li>
        </ul>
      </Drawer>
    </StyledNavbar>
  );
};
