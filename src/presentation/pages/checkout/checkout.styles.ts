import { Box, styled } from "@mui/material";

export const CheckoutContainer = styled(Box)(({ theme }) => ({
  "& header": {
    backgroundColor: "#fafafa",
  },

  "& main": {
    marginTop: 40,
    display: "grid",
    gap: 28,
    gridTemplateColumns: "1fr 320px",

    "& .checkout-information": {
      "& section": {
        marginTop: 40,
        display: "grid",
        gap: 34,
        gridTemplateColumns: "200px 1fr",

        "& h4": {
          fontSize: 14,
          textTransform: "uppercase",
          fontWeight: theme.typography.fontWeightBold,
        },

        "& .personal-information": {
          gap: 12,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
        },

        "& .shipping-address": {
          "& .address": {
            "& .fields-row": {
              gap: 12,
              display: "flex",
            },
          },
        },
      },
    },

    "& .order-summary": {
      padding: "12px 20px",
    },
  },
}));

export const BillingAddressButton = styled("button")(({ theme }) => ({
  padding: 0,
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  color: theme.palette.grey[500],
  cursor: "pointer",

  "& span": {
    fontSize: 12,
  },
}));
