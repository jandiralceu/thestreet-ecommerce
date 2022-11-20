import { Box, Rating, styled, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Product } from "../../../../models";
import { ProductRepository } from "../../../../repositories";
import { ProductService } from "../../../../services";
import { addToCart } from "../../../../store/cart";
import {
  HighlighProducts,
  NumberController,
  PriceLabel,
} from "../../../components";

import { Tabs } from "./components";

const ProductDetailsPageContainer = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 50,

  "& .images": {
    display: "grid",
    height: 460,
    gap: 12,
    gridTemplateColumns: "160px 1fr",

    "& img": {
      width: "100%",
    },

    "& .miniatures": {
      display: "grid",
      gap: 12,
      gridTemplateColumn: "1fr",
    },
  },

  "& .controls": {
    display: "flex",
    width: 420,

    "& .add-to-cart": {
      border: "none",
      textTransform: "uppercase",
      backgroundColor: "#000",
      color: "#fff",
      width: "100%",
      cursor: "pointer",
    },
  },
}));

const productService = new ProductService(new ProductRepository());

const ProductDetailsPage = () => {
  const params = useParams<{ slug: string }>();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product>();
  const [relatedProducts, setRelatedProduct] = useState<Product[]>();
  const dispatch = useDispatch();

  const getProductBySlug = useCallback(async () => {
    const product = await productService.getBySlug(params.slug!);
    setProduct(product);
  }, [params.slug]);

  const getRelatedProducts = useCallback(async () => {
    const products = await productService.getRelatedProducts(params.slug!);
    setRelatedProduct(products);
  }, [params.slug]);

  const updateQuantity = useCallback(
    (action: "increase" | "decrease") => {
      if (action === "increase") setQuantity(quantity + 1);
      else {
        if (quantity == 1) return;
        setQuantity(quantity - 1);
      }
    },
    [quantity]
  );

  useEffect(() => {
    getProductBySlug();
    getRelatedProducts();
  }, [getProductBySlug, getRelatedProducts]);

  return !product ? (
    <Box>No Product</Box>
  ) : (
    <>
      <ProductDetailsPageContainer>
        <Box component="section" className="images">
          <Box className="miniatures">
            <Box
              sx={{
                backgroundImage: `url(${product.imageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            />
            <Box
              sx={{
                backgroundImage: `url(${product.imageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            />
            <Box
              sx={{
                backgroundImage: `url(${product.imageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            />
          </Box>

          <Box
            sx={{
              backgroundImage: `url(${product.imageUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          />
        </Box>

        <Box component="section">
          <Typography component="h2" variant="h4">
            {product.name}
          </Typography>
          <PriceLabel
            price={product.price}
            promotionalPrice={product.promotionalPrice}
            priceFontSize={18}
            promotionalPriceFontSize={24}
          />
          <Rating value={3.5} sx={{ marginTop: 5 }} size="small" readOnly />
          <Typography variant="body2" component="p" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            incidunt ratione. Provident doloremque, est beatae assumenda autem
            labore architecto illum. Eos placeat eum explicabo! Doloribus
            repudiandae laborum voluptatem quas! Fugit?
          </Typography>

          <Box mt={4} className="controls">
            <Box>
              <NumberController
                value={quantity}
                increase={() => updateQuantity("increase")}
                decrease={() => updateQuantity("decrease")}
              />
            </Box>

            <button
              onClick={() => dispatch(addToCart({ ...product, quantity }))}
              type="button"
              className="add-to-cart"
            >
              Add to Cart
            </button>
          </Box>
        </Box>
      </ProductDetailsPageContainer>

      <Tabs />

      {!!relatedProducts && (
        <HighlighProducts
          component="section"
          mt={6}
          title="Featured Products"
          products={relatedProducts}
        />
      )}
    </>
  );
};

export default ProductDetailsPage;
