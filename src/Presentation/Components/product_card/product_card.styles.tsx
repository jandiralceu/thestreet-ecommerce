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
      display: "flex",
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
  display: "none",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",

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
    display: "flex",
    padding: 60,
    textAlign: "left",
    justifyContent: "flex-start",
    flexDirection: "column",

    "& .controls": {
      height: 48,
      marginTop: 24,
      display: "flex",
      alignItems: "center",
      border: "1px solid #ccc",

      "& .label": {
        // width: "100%",
        marginLeft: 14,
      },

      "& .control-quantity": {
        display: "flex",
        alignItems: "center",
        margin: "0 20px",
        width: 80,
      },

      "& .add-to-cart": {
        border: "none",
        textTransform: "uppercase",
        backgroundColor: "#000",
        color: "#fff",
        width: 200,
        height: "100%",
        cursor: "pointer",
      },
    },
  },
}));
