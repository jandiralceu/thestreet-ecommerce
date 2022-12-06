import { Box, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../../models";
import { ProductRepository } from "../../../repositories";
import { ProductService } from "../../../services";
import { HighlighProducts } from "../../components";
import { routeAnimationProps, RouteName } from "../../utils";

import { Main } from "./home.styles";

const productService = new ProductService(new ProductRepository());

const HomePage = () => {
  const [highlightsProducts, setHighlightsProducts] = useState<Product[]>();

  const getHighlightsProducts = useCallback(async () => {
    const result = await productService.getHomeHighlightProducts();
    setHighlightsProducts(result);
  }, []);

  useEffect(() => {
    getHighlightsProducts();
  }, [getHighlightsProducts]);
  return (
    <Main {...routeAnimationProps}>
      <Box component="section" className="hero">
        <Link to={RouteName.shop} className="area1"></Link>
        <Link to={RouteName.shop} className="area2"></Link>
        <Link to={RouteName.shop} className="area3"></Link>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        component="section"
        className="welcome"
      >
        <Typography component="h4" variant="h4">
          Welcome
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsam
          veniam quidem. Sapiente, molestias. Nihil voluptate omnis quidem.
        </Typography>
      </Box>

      {!!highlightsProducts && (
        <HighlighProducts
          title="Featured Products"
          products={highlightsProducts}
          component="section"
          mt={2}
          mb={12}
        />
      )}
    </Main>
  );
};

export default HomePage;
