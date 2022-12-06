import { Box, BoxProps, styled, Typography } from "@mui/material";
import { Product } from "../../../models";
import { ProductCard } from "../product_card";

const RelatedProducts = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: 20,
  gridTemplateColumns: "repeat(4, 1fr)",

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: "1fr",
  },
}));

type HighlighProductsProps = {
  title: string;
  products: Product[];
} & BoxProps;

export const HighlighProducts = ({
  products,
  title,
  ...props
}: HighlighProductsProps) => {
  return (
    <Box {...props}>
      <Typography mb={2} sx={{ textTransform: "uppercase" }} mt={2}>
        {title}
      </Typography>
      <RelatedProducts>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </RelatedProducts>
    </Box>
  );
};
