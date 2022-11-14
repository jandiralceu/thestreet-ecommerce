import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './presentation/pages/home/home';
import ShopPage from './presentation/pages/shop/shop';
import AuthPage from './presentation/pages/auth/auth';
import PageNotFound from './presentation/pages/page_not_found/page_not_found';
import ProfilePage from './presentation/pages/profile/profile';
import CartPage from './presentation/pages/cart/cart';

import { MainTheme } from './presentation/components';

function App() {
  return (
      <Routes>
        <Route path='/' element={<MainTheme />}>
          <Route index element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/cart' element={<CartPage />} />
        </Route>
        <Route path='/auth/*' element={<AuthPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
  );
}

export default App;
