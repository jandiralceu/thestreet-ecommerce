import { Box, BoxProps, Typography } from "@mui/material";
import { toMoney } from "../../utils";

type PriceLabelProps = {
  price: number;
  priceFontSize?: number;
  promotionalPrice: number | null;
  promotionalPriceFontSize?: number;
};

export const PriceLabel = ({
  price,
  priceFontSize = 16,
  promotionalPriceFontSize = 18,
  promotionalPrice,
  ...props
}: PriceLabelProps & BoxProps) => {
  const isPromotionalProduct = promotionalPrice && promotionalPrice < price;

  return (
    <Box display="flex" alignItems="center" {...props}>
      <Typography
        component="span"
        sx={{
          fontSize: priceFontSize,
          opacity: isPromotionalProduct ? 0.5 : 1,
          textDecoration: isPromotionalProduct ? "line-through" : "none",
        }}
      >
        {toMoney(price)}
      </Typography>

      {isPromotionalProduct && (
        <Typography
          component="span"
          sx={{
            fontSize: promotionalPriceFontSize,
            marginLeft: 2,
          }}
        >
          {toMoney(promotionalPrice)}
        </Typography>
      )}
    </Box>
  );
};
