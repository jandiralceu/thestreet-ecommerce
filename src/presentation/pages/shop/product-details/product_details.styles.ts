import { Box, styled } from "@mui/material";

export const ProductDetailsPageContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 50,
  marginTop: 40,

  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },

  [theme.breakpoints.down("md")]: {
    gap: 25,
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "& .images": {
    display: "grid",
    height: 460,
    gap: 12,
    gridTemplateColumns: "160px 1fr",

    [theme.breakpoints.down("lg")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },

    [theme.breakpoints.down("sm")]: {
      minHeight: 300,
    },

    "& img": {
      width: "100%",
    },

    "& .miniatures": {
      display: "grid",
      gap: 12,
      gridTemplateColumn: "1fr",

      [theme.breakpoints.down("lg")]: {
        gridTemplateColumns: "repeat(3, 1fr)",
      },

      "& div": {
        [theme.breakpoints.down("lg")]: {
          height: 80,
        },
      },
    },

    "& .highlight-image": {
      width: "100%",

      [theme.breakpoints.down("lg")]: {
        height: "100%",
      },
    },
  },

  "& .controls": {
    display: "flex",
    width: 420,

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: '40px auto 0',
    },

    [theme.breakpoints.down("md")]: {
      width: 260,
    },

    [theme.breakpoints.down("lg")]: {
      width: 300,
    },

    "& .add-to-cart": {
      border: "none",
      textTransform: "uppercase",
      backgroundColor: "var(--black)",
      color: "var(--white)",
      width: "100%",
      cursor: "pointer",

      [theme.breakpoints.down("lg")]: {
        fontSize: 12,
      },
    },
  },
}));
