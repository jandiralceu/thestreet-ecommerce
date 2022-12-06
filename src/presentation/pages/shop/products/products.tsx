import { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

import { routeAnimationProps, RouteName } from "../../../utils";
import { ProductCard } from "../../../components";
import {
  selectCategories,
  selectProducts,
  selectProductsQuantity,
  onFetchCategoriesStart,
  setProducts,
} from "../../../../store/store";
import { ProductService } from "../../../../services";
import {
  ProductRepository,
} from "../../../../repositories";

import { ProductsContainer } from "./products.styles";



const productService = new ProductService(new ProductRepository());

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);
  const productsQuantity = useSelector(selectProductsQuantity);

  const getProducts = useCallback(async () => {
    const result = await productService.getAll();
    dispatch(setProducts(result));
  }, [dispatch]);


  useEffect(() => {
    getProducts();
    dispatch(onFetchCategoriesStart());
  }, [dispatch, getProducts]);


  return (
    <ProductsContainer {...routeAnimationProps}>
      <Box component="section" className="filters">
        <Typography component="h2">Category</Typography>

        <ul className="categories">
          <li>
            <Link to={RouteName.shop}>All</Link>
          </li>

          {categories?.map((category) => (
            <li key={category}>
              <Link to={RouteName.shop}>{category}</Link>
            </li>
          ))}
        </ul>
      </Box>

      <main>
        <header>
          <Typography>Showing {productsQuantity} products</Typography>
        </header>

        <Box className="products">
          {products?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </Box>
      </main>
    </ProductsContainer>
  );
};

export default ProductsPage;
