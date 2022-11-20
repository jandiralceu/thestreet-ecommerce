import { Box, IconButton, styled, Typography } from "@mui/material";
import { Close as Remove } from "@mui/icons-material";
import { useDispatch } from "react-redux";

import { CartItem } from "../../../../../models";
import { NumberController } from "../../../../components";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../../../../store/cart";
import { useCallback } from "react";

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
  const dispatch = useDispatch();

  const getTotal = useCallback((item: CartItem) => item.price * item.quantity, []);

  return (
    <ItemContainer>
      <Box className="product-detail">
        <IconButton onClick={() => dispatch(removeFromCart(item.id))}>
          <Remove />
        </IconButton>
        <img src={item.imageUrl} alt={item.name} />
        <Typography component="p">{item.name}</Typography>
      </Box>

      <Box className="price-side">
        <Typography component="p">R$ {item.price}</Typography>
        <NumberController
          value={item.quantity}
          decrease={() => dispatch(decreaseQuantity(item.id))}
          increase={() => dispatch(increaseQuantity(item.id))}
        />
        <Typography component="p">R$ {getTotal(item)}</Typography>
      </Box>
    </ItemContainer>
  );
};
