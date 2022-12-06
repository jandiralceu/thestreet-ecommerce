import { styled } from "@mui/material";

export const StyledFooter = styled("footer")(({ theme }) => ({
  marginTop: 200,

  [theme.breakpoints.down("md")]: {
    marginTop: 100,
  },

  "& nav": {
    padding: "20px 0",
    borderTop: "1px solid #ccc",
    borderBottom: "1px solid #ccc",

    "& .menu": {
      display: "grid",
      gap: 24,
      gridTemplateColumns: "repeat(4, 1fr)",

      [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
      },

      "& h5": {
        marginBottom: 24,
        fontWeight: theme.typography.fontWeightBold,
        textTransform: "uppercase",
      },

      "& ul": {
        fontSize: 14,
      },
    },
  },
  "& .all-rights-text": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px 0",

    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      padding: "20px 0",
    },
  },
}));
