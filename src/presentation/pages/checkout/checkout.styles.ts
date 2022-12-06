import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";

export const CheckoutFormContainer = styled(motion.form)(({ theme }) => ({
  "& header": {
    backgroundColor: theme.palette.grey[100],
  },

  "& main": {
    marginTop: 60,
    display: "grid",
    gap: 28,
    gridTemplateColumns: "1fr 320px",

    [theme.breakpoints.down('md')]: {
      display: "flex",
      flexDirection: "column-reverse"
    },

    "& .checkout-information": {
      "& section": {
        marginBottom: 80,
        display: "grid",
        gap: 34,
        gridTemplateColumns: "200px 1fr",

        [theme.breakpoints.down('md')]: {
          display: "flex",
          flexDirection: "column",
          marginBottom: 30,
        },

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

          [theme.breakpoints.down('sm')]: {
            display: "flex",
            flexDirection: "column",
          },
        },

        "& .shipping-address": {
          "& .address": {
            "& .fields-row": {
              gap: 12,
              display: "flex",
              marginTop: 12,

              [theme.breakpoints.down('sm')]: {
                flexDirection: "column",
              },
            },
          },
        },
      },
    },

    "& .order-summary": {
      padding: "12px 20px",

      [theme.breakpoints.down('md')]: {
        border: 'none',
        boxShadow: "none",
        padding: 0,
      },


      '& button[type=submit]': {
        [theme.breakpoints.down('md')]: {
          display: "none"
        },
      }
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

  [theme.breakpoints.down('sm')]: {
    display: "flex",
    flexDirection: "column",
  },
}));

export const SelectShippingContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 20,

  [theme.breakpoints.down('sm')]: {
    display: "flex",
    flexDirection: "column",
  },
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


