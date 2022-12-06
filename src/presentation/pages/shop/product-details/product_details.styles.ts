import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ProductDetailsPageContainer = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 50,

  "& .images": {
    display: "grid",
    height: 460,
    gap: 12,
    gridTemplateColumns: "160px 1fr",

    "& img": {
      width: "100%",
    },

    "& .miniatures": {
      display: "grid",
      gap: 12,
      gridTemplateColumn: "1fr",
    },
  },

  "& .controls": {
    display: "flex",
    width: 420,

    "& .add-to-cart": {
      border: "none",
      textTransform: "uppercase",
      backgroundColor: "#000",
      color: "#fff",
      width: "100%",
      cursor: "pointer",
    },
  },
}));
