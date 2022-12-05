import { Card, styled } from "@mui/material";

export const SectionContainer = styled("section")(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  backgroundColor: theme.palette.grey[200],

  "& .all-rights-text": {
    marginTop: 20,
    fontSize: 12,
  },
}));

export const CardContainer = styled(Card)(({ theme }) => ({
  width: "860px",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",

  "& .cover-container": {
    backgroundColor: theme.palette.primary.light,
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",

    "& .cover": {
      "& img": {
        width: "100%",
      },
    },
  },

  "& main": {
    minHeight: "100%",
    padding: "60px",
    backgroundColor: "#fff",
  },
}));
