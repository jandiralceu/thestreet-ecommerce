import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import HomePage from "./presentation/pages/home/home";
import ShopPage from "./presentation/pages/shop/shop";

import { MainTheme } from "./presentation/components";
import { RouteName } from "./presentation/utils";
import { checkUserSession } from "./store/store";

const AuthPage = lazy(() => import("./presentation/pages/auth/auth"));
const CartPage = lazy(() => import("./presentation/pages/cart/cart"));
const ProfilePage = lazy(() => import("./presentation/pages/profile/profile"));
const CheckoutPage = lazy(
  () => import("./presentation/pages/checkout/checkout")
);
const PageNotFound = lazy(
  () => import("./presentation/pages/page_not_found/page_not_found")
);

function App() {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(checkUserSession());
  }, [dispath]);

  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path={RouteName.home} element={<MainTheme />}>
          <Route index element={<HomePage />} />
          <Route path={`${RouteName.shop}/*`} element={<ShopPage />} />
          <Route path={RouteName.profile} element={<ProfilePage />} />
          <Route path={RouteName.cart} element={<CartPage />} />
        </Route>
        <Route path="/auth/*" element={<AuthPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path={RouteName.checkout} element={<CheckoutPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
