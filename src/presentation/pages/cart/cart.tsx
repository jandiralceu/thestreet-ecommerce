import { Box, Collapse, Divider, Grid, Grow, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import {
  RedeemRounded as Redeem,
  ArrowBackRounded as Back,
} from "@mui/icons-material";
import { TransitionGroup } from "react-transition-group";

import { routeAnimationProps, RouteName, toMoney } from "../../utils";
import { EmptyCart, Item } from "./components";
import { CartPageContainer, CheckoutButton } from "./cart.styled";
import { selectCartInfo } from "../../../store/store";

const CartPage = () => {
  const { items, isEmpty, shippingPrice, discount, total, subTotal } = useSelector(selectCartInfo);

  return (
    <motion.div {...routeAnimationProps}>
      <Grow in={isEmpty} mountOnEnter unmountOnExit>
        <Box>
          <EmptyCart />
        </Box>
      </Grow>

      {!isEmpty && (
        <CartPageContainer container>
          <Grid item md={8} component="section">
            <Typography component="h2">Shopping Cart</Typography>
            <Box mt={6} className="items">
              <TransitionGroup>
                {items.map((item, index) => (
                  <Collapse key={item.id} unmountOnExit>
                    <Box mb={2}>
                      <Item {...item} />
                      {items.length - 1 != index && (
                        <Divider sx={{ marginTop: 2 }} />
                      )}
                    </Box>
                  </Collapse>
                ))}
              </TransitionGroup>

              <Box className="coupon" component="section">
                <Redeem />
                <input placeholder="Coupon Code" />
                <button>apply coupon</button>
              </Box>

              <Box className="back" component="section" mt={4}>
                <Link to={RouteName.shop}>
                  <Back sx={{ width: 18, marginRight: 1 }} />
                  <Typography variant="caption" component="span">
                    Go Back Shopping
                  </Typography>
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
                  <Typography>{toMoney(subTotal)}</Typography>
                </Box>

                <Box>
                  <Typography component="h3">Shipping</Typography>
                </Box>
                <Box>
                  <Typography>{toMoney(shippingPrice)}</Typography>
                </Box>

                <Box>
                  <Typography component="h3">Discount</Typography>
                </Box>
                <Box>
                  <Typography>{toMoney(discount)}</Typography>
                </Box>
              </Box>

              <Divider sx={{ margin: "30px 0 20px" }} />

              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography component="h3">Total</Typography>
                <Typography variant="h2">{toMoney(total)}</Typography>
              </Box>

              <CheckoutButton to={RouteName.checkout}>
                Proceed to checkout
              </CheckoutButton>
            </Box>
          </Grid>
        </CartPageContainer>
      )}
    </motion.div>
  );
};

export default CartPage;
