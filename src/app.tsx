import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./presentation/pages/home/home";
import ShopPage from "./presentation/pages/shop/shop";
import AuthPage from "./presentation/pages/auth/auth";
import PageNotFound from "./presentation/pages/page_not_found/page_not_found";
import ProfilePage from "./presentation/pages/profile/profile";
import CartPage from "./presentation/pages/cart/cart";

import { MainTheme } from "./presentation/components";
import { RouteName } from "./presentation/utils";
import CheckoutPage from "./presentation/pages/checkout/checkout";
import { useDispatch } from "react-redux";
import { checkUserSession } from "./store/user";


function App() {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(checkUserSession());
  }, [dispath]);
  
  return (
    <Routes>
      <Route path={RouteName.home} element={<MainTheme />}>
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path={`${RouteName.shop}/*`}
          element={<ShopPage />}
        />
        <Route
          path={RouteName.profile}
          element={<ProfilePage />}
        />
        <Route
          path={RouteName.cart}
          element={<CartPage />}
        />
        <Route
          path={RouteName.checkout}
          element={<CheckoutPage />}
        />
      </Route>
      <Route path="/auth/*" element={<AuthPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
