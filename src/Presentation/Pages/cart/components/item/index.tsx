import { Box, IconButton, styled, Typography } from "@mui/material";
import { Close as Remove } from "@mui/icons-material";

import { CartItem, QuantityOperationType } from "../../../../../models";
import { NumberController } from "../../../../components";
import { useCartContext } from "../../../../contexts";

const ItemContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "& .product-detail": {
    display: "flex",
    gap: 24,
    alignItems: "center",

    "& img": {
      width: 80,
      height: 80,
    },
  },
  "& .price-side": {
    display: "flex",
    alignItems: "center",
    gap: 24,
  },
}));

export const Item = (item: CartItem) => {
  const { removeItem, getTotalPriceByItem, updateItemQuantity } = useCartContext();

  return (
    <ItemContainer>
      <Box className="product-detail">
        <IconButton onClick={() => removeItem(item.id)}>
          <Remove />
        </IconButton>
        <img src={item.imageUrl} alt={item.name} />
        <Typography component="p">{item.name}</Typography>
      </Box>

      <Box className="price-side">
        <Typography component="p">{item.price}</Typography>
        <NumberController
          value={item.quantity}
          decrease={() => updateItemQuantity(item.id, QuantityOperationType.subtract)}
          increase={() => updateItemQuantity(item.id, QuantityOperationType.add)}
        />
        <Typography component="p">{getTotalPriceByItem(item)}</Typography>
      </Box>
    </ItemContainer>
  );
};
