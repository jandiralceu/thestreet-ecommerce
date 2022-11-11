import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './presentation/pages/home/home';
import ShopPage from './presentation/pages/shop/shop';
import AuthPage from './presentation/pages/auth/auth';
import PageNotFound from './presentation/pages/page_not_found/page_not_found';

import { Navbar } from './presentation/components';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
        </Route>
        <Route path='/auth/*' element={<AuthPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
  );
}

export default App;
