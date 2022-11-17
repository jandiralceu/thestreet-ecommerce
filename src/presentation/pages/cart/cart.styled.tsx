import { Grid, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const CartPageContainer = styled(Grid)(({ theme }) => ({
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
      backgroundColor: "transparent",
    },
  },
  "& .back": {
    "& a": {
      display: "flex",
      alignItems: "center",
    },
  },
}));

export const CheckoutButton = styled(Link)(({ theme }) => ({
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
