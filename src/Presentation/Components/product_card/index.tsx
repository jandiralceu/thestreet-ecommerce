import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../../models";
import { Rate } from "../rate";

type ProductCardProps = {
  product: Product;
};

type PriceLabelProps = {
  price: number;
  promotionalPrice?: number;
};

const Container = styled(Link)(({ theme }) => ({
  "& .product-image": {
    height: 260,
  },

  "& .product-info": {
    padding: "0 6px",
    textTransform: "uppercase",
    fontWeight: theme.typography.fontWeightBold,

    "& h3": {
        textTransform: "uppercase",
        fontWeight: theme.typography.fontWeightBold,
      },
  },
}));

const PriceLabel = ({ price, promotionalPrice }: PriceLabelProps) => {
    const isPromotionalProduct = promotionalPrice && promotionalPrice < price;

  return (
    <Box display="inline" sx={{ textAlign: "center" }}>
      <Typography
        component="span"
        sx={{
          opacity: isPromotionalProduct ? 0.5 : 1,
          textDecoration: isPromotionalProduct ? "line-through" : "none",
        }}
      >
        R${price}
      </Typography>

      {isPromotionalProduct && (
        <Typography
          component="span"
          sx={{
            fontSize: 18,
            marginLeft: 2,
          }}
        >
          R${promotionalPrice}
        </Typography>
      )}
    </Box>
  );
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Container to="/">
      <Box
        className="product-image"
        sx={{
          backgroundImage: `url(${product.imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></Box>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        className="product-info"
      >
        <Typography component="h3" sx={{ marginTop: 2 }}>{product.name}</Typography>
        <Rate />
        <PriceLabel price={product.price} />
      </Box>
    </Container>
  );
};
