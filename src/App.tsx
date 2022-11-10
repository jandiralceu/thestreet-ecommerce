import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './Presentation/Pages/Home/Home';
import ShopPage from './Presentation/Pages/Shop/Shop';
import AuthPage from './Presentation/Pages/Auth/Auth';
import PageNotFound from './Presentation/Pages/PageNotFound/page_not_found';

import { Navbar } from './Presentation/Components';

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
