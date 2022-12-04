import { Box, styled } from "@mui/material";

export const CheckoutFormContainer = styled("form")(({ theme }) => ({
  "& header": {
    backgroundColor: theme.palette.grey[100],
  },

  "& main": {
    marginTop: 60,
    display: "grid",
    gap: 28,
    gridTemplateColumns: "1fr 320px",

    "& .checkout-information": {
      "& section": {
        marginBottom: 80,
        display: "grid",
        gap: 34,
        gridTemplateColumns: "200px 1fr",

        "& h4": {
          fontSize: 14,
          textTransform: "uppercase",
          marginBottom: 16,
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

export const SelectPaymentContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 20,
}));

export const SelectShippingContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 20,
}));

export const PaymentMethodsContainer = styled(Box)(({ theme }) => ({}));

export const CardDetailsContainer = styled('div')(() => ({
  marginTop: 24,
  display: "grid",
  gridTemplateColumns: "220px 200px",
  justifyContent: "space-between"
}));

export const CardNumber = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  padding: 10,
  borderRadius: 6,
  display: 'flex',
  flexDirection: 'column',

  "& span": {
    fontSize: 10,
    marginBottom: 2,
    color: theme.palette.primary.dark,
    fontWeight: theme.typography.fontWeightBold,
  }
}));

export const ExpirationAndCode = styled('div')(({ theme }) => ({
  display: "grid",
  gap: 8,
  gridTemplateColumns: "82px 60px",
  justifyContent: "flex-end"
}));

export const CardExpiryWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  padding: 10,
  borderRadius: 6,
  display: 'flex',
  flexDirection: 'column',

  "& span": {
    fontSize: 10,
    marginBottom: 2,
    color: theme.palette.primary.dark,
    fontWeight: theme.typography.fontWeightBold,
  }
}));

export const CardCvcWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  padding: 10,
  borderRadius: 6,
  display: 'flex',
  flexDirection: 'column',
  
  "& span": {
    fontSize: 10,
    marginBottom: 2,
    color: theme.palette.primary.dark,
    fontWeight: theme.typography.fontWeightBold,
  }
}));

