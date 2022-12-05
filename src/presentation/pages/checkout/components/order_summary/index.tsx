import { Box, Fade, styled, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import { selectCartInfo } from "../../../../../store/store";
import { TextField } from "../../../../components";
import { toMoney } from "../../../../utils";

const OrderSummaryContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
  },

  "& .title": {
    textTransform: "uppercase",
    fontWeight: theme.typography.fontWeightBold,
  },

  "& .items": {
    display: "flex",
    flexDirection: "column",

    "& li": {
      display: "grid",
      gap: 18,
      gridTemplateColumns: "60px 1fr",

      "&:not(:last-of-type)": {
        marginBottom: 8,
      },

      "& h4": {
        fontSize: 14,
        textTransform: "uppercase",
        fontWeight: theme.typography.fontWeightBold,
      },

      "& .item-image": {
        "& img": {
          width: "100%",
          borderRadius: 8,
        },
      },

      "& .details": {
        fontSize: 12,
        color: theme.palette.grey[500],
      },

      "& .price-quantity": {
        color: theme.palette.grey[500],

        "& p:first-of-type": {
          fontWeight: theme.typography.fontWeightBold,
        },
      },
    },
  },

  "& .price-info": {
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.down('md')]: {
      display: "none",
    },

    "& li": {
      display: "flex",
      justifyContent: "space-between",

      "&:not(:last-of-type)": {
        marginBottom: 3,
      },

      "& p": {
        "&:first-of-type": {
          fontSize: 12,
          color: theme.palette.grey[500],
        },

        "&:last-of-type": {
          fontSize: 14,
          fontWeight: theme.typography.fontWeightBold,
        },
      },
    },
  },
}));

const DiscountContainer = styled(Box)(({ theme}) => ({
  marginTop: 14,

  [theme.breakpoints.down('md')]: {
    display: "none",
  },
}))

export const OrderSummary = () => {
  const { items, shippingPrice, discount, total, subTotal } =
    useSelector(selectCartInfo);

  return (
    <OrderSummaryContainer>
      <Typography component="h3" className="title" mb={3}>
        Order Summary
      </Typography>

      <ul className="items">
        {items.map((item) => (
          <li key={item.id}>
            <Box className="item-image">
              <img src={item.imageUrl} alt={item.name} />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box>
                <Typography component="h4">{item.name}</Typography>
                <Typography component="p" className="details">
                  Details
                </Typography>
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                className="price-quantity"
              >
                <Typography>{toMoney(item.price)}</Typography>
                <Typography>{item.quantity}x</Typography>
              </Box>
            </Box>
          </li>
        ))}
      </ul>

      <DiscountContainer>
        <TextField type="text" label="Discount code" disabled />
      </DiscountContainer>

      <Box className="price-info" component="ul" mt={3}>
        <li>
          <Typography component="p">Subtotal</Typography>
          <Typography component="p">{toMoney(subTotal)}</Typography>
        </li>
        <li>
          <Typography component="p">Shipping cost</Typography>
          <Typography component="p">{toMoney(shippingPrice)}</Typography>
        </li>
        <Fade in={!!discount} mountOnEnter unmountOnExit>
          <li>
            <Typography component="p">Discount</Typography>
            <Typography component="p">{toMoney(discount)}</Typography>
          </li>
        </Fade>
        <li>
          <Typography component="p">Total</Typography>
          <Typography component="p">{toMoney(total)}</Typography>
        </li>
      </Box>
    </OrderSummaryContainer>
  );
};
