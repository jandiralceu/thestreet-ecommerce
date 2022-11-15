import { Box, Divider, Grid, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts";
import { RouteName } from "../../utils";
import { Item } from "./components";
import {
  RedeemRounded as Redeem,
  ArrowBackRounded as Back,
} from "@mui/icons-material";

const CartPageContainer = styled(Grid)(({ theme }) => ({
  "& h2": {
    fontSize: 28,
  },

  "& h3": {
    textTransform: "uppercase",
    fontWeight: theme.typography.fontWeightBold,
  },

  "& .items": {
    marginRight: 60,
  },

  "& .cart-total": {
    padding: 32,
    fontSize: 28,
    backgroundColor: "#fafafa",
  },
  "& .value-and-shipping": {
    rowGap: 18,
    display: "grid",
    gridTemplateColumns: "140px 1fr",
  },
  "& .coupon": {
    height: 48,
    display: "flex",
    marginTop: 34,
    padding: 8,
    gap: 8,
    alignItems: "center",
    backgroundColor: "#fafafa",

    "& button": {
      cursor: "pointer",
      width: 200,
      border: "none",
      outline: "none",
      margin: 0,
      padding: 0,
      textTransform: "uppercase",
      backgroundColor: "transparent",
      fontWeight: theme.typography.fontWeightBold,
    },

    "& input": {
      width: "100%",
      border: "none",
      outline: "none",
      backgroundColor: "transparent"
    },
  },
  "& .back": {
    "& a": {
      display: "flex",
      alignItems: "center",
    },
  },
}));

const CheckoutButton = styled(Link)(({ theme }) => ({
  backgroundColor: "#000",
  color: "#fff",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "18px 0",
  textTransform: "uppercase",
  fontSize: 16,
  marginTop: 24,
  fontWeight: theme.typography.fontWeightBold,
}));

const CartPage = () => {
  const { items, total } = useCartContext();

  return (
    <CartPageContainer container>
      <Grid item md={8} component="section">
        <Typography component="h2">Shopping Cart</Typography>
        <Box mt={6} className="items">
          {items.map((item, index) => (
            <Box mb={2}>
              <Item {...item} />
              {items.length - 1 != index && <Divider sx={{ marginTop: 2 }} />}
            </Box>
          ))}

          <Box className="coupon" component="section">
            <Redeem />
            <input placeholder="Coupon Code" />
            <button>apply coupon</button>
          </Box>

          <Box className="back" component="section" mt={4}>
            <Link to={RouteName.shop}>
              <Back sx={{ width: 18, marginRight: 1 }} />
              <Typography variant="caption" component="span">Go Back Shopping</Typography>
            </Link>
          </Box>
        </Box>
      </Grid>

      <Grid item md={4} component="section">
        <Box className="cart-total">
          <Typography component="h2">Cart Totals</Typography>

          <Box className="value-and-shipping" mt={4}>
            <Box>
              <Typography component="h3">Subtotal</Typography>
            </Box>
            <Box>
              <Typography>{total}</Typography>
            </Box>

            <Box>
              <Typography component="h3">Shipping</Typography>
            </Box>
            <Box>
              <Typography>120</Typography>
            </Box>
          </Box>

          <Divider sx={{ margin: "30px 0 20px" }} />

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography component="h3">Total</Typography>
            <Typography variant="h1">R$210</Typography>
          </Box>

          <CheckoutButton to={RouteName.home}>
            Proceed to checkout
          </CheckoutButton>
        </Box>
      </Grid>
    </CartPageContainer>
  );
};

export default CartPage;
