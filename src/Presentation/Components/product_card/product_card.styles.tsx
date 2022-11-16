import { Box, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const Container = styled(Link)(({ theme }) => ({
  "& .product-image": {
    height: 260,
    textAlign: "center",
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",

    "&:hover > button": {
      opacity: 1,
    },
  },

  "& .product-info": {
    padding: "0 6px",
    textTransform: "uppercase",
    fontWeight: theme.typography.fontWeightBold,

    "& h3": {
      textTransform: "uppercase",
      fontWeight: theme.typography.fontWeightBold,
    },
  },
}));

export const QuickLookButton = styled("button")(() => ({
  margin: 0,
  border: "none",
  backgroundColor: "#000",
  color: "#fff",
  display: "flex",
  opacity: 0,
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  transition: 'opacity 0.3s ease-in',

  "& span": {
    marginRight: 8,
    fontSize: 12,
  },
}));

export const BoxModal = styled(Box)(() => ({
  display: "grid",
  height: "50vh",
  flexDirection: "row",
  width: 1024,
  gridTemplateColumns: "repeat(2, 50%)",

  "& .modal-product-image": {
    width: "100%",
  },

  "& .modal-description": {
    "& .close": {
      textAlign: 'right',
      padding: '12px 12px 0',
    },

    "& .modal-content": {
      padding: '20px 60px',
      display: "flex",
      textAlign: "left",
      justifyContent: "flex-start",
      flexDirection: "column",

      "& .modal-controllers": {
        display: "grid",
        gridTemplateColumns: 'auto 1fr',
        justifyContent: "flex-start",
        marginTop: 24,

        "& .add-to-cart": {
          border: "none",
          textTransform: "uppercase",
          backgroundColor: "#000",
          color: "#fff",
          width: '100%',
          height: "100% !important",
          cursor: "pointer",
        },
      },

      
    },
  },
}));
