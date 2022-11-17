import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { RouteName } from "../../../../utils";

const EmptyCartContainer = styled(Box)(({ theme }) => ({
  "& .title": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: '1px solid #ccc',
    padding: '28px 0',
  },

  '& a': {
    backgroundColor: "#000",
  color: "#fff",
  width: 220,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "18px 0",
  textTransform: "uppercase",
  fontSize: 16,
  marginTop: 24,
  fontWeight: theme.typography.fontWeightBold,
  },
}));

export const EmptyCart = () => {
  return (
    <EmptyCartContainer mt={14}>
      <Box className="title">
        <Typography component="h2" variant="h4">
          YOUR CART IS CURRENTLY EMPTY
        </Typography>
      </Box>

      <Typography my={8}>
        Why not return to our amazing shop and start filling it with products.
        Just click on the button below to instantly get back to the shop page.
        Oh, and while you’re there, check out all of our mind-blowing discounts.
      </Typography>

      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to={RouteName.shop}>RETURN TO SHOP</Link>
      </Box>
    </EmptyCartContainer>
  );
};
