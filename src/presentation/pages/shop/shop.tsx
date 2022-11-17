import { Route, Routes } from 'react-router-dom';


import ProductsPage from './products/products';
import ProductDetailsPage from './product-details/product-details';


const ShopPage = () => {  
  return (
    <Routes>
      <Route index element={<ProductsPage />} />
      <Route path={`/:slug`} element={<ProductDetailsPage />} />
    </Routes>
  )
};

export default ShopPage;
