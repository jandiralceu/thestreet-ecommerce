import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./presentation/pages/home/home";
import ShopPage from "./presentation/pages/shop/shop";
import AuthPage from "./presentation/pages/auth/auth";
import PageNotFound from "./presentation/pages/page_not_found/page_not_found";
import ProfilePage from "./presentation/pages/profile/profile";
import CartPage from "./presentation/pages/cart/cart";

import { MainTheme } from "./presentation/components";
import { RouteName } from "./presentation/utils";

type CrumbProps = {
  name: string;
  route: string;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainTheme />}>
        <Route
          index
          element={<HomePage />}
          handle={{
            crumb: (data: any) => ({ name: "Home", route: RouteName.home }),
          }}
        />
        <Route
          path="/shop"
          element={<ShopPage />}
          handle={{
            crumb: (data: any) => ({ name: data.threadName, route: RouteName.shop }),
          }}
        />
        <Route
          path="/profile"
          element={<ProfilePage />}
          handle={{
            crumb: (data: any) => ({ name: data.threadName, route: RouteName.profile }),
          }}
        />
        <Route
          path="/cart"
          element={<CartPage />}
          handle={{
            crumb : (data: any): CrumbProps => ({ name: data.threadName, route: RouteName.cart }),
          }}
        />
      </Route>
      <Route path="/auth/*" element={<AuthPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
