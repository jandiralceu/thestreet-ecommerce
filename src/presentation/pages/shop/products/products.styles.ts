import { styled } from "@mui/material";
import { motion } from "framer-motion";

export const ProductsContainer = styled(motion.div)(({ theme }) => ({
  display: "flex",
  gap: 20,

  "& .filters": {
    minWidth: 260,

    "& h2": {
      marginBottom: 12,
      textTransform: "uppercase",
      fontWeight: theme.typography.fontWeightBold,
    },

    "& .categories": {
      marginTop: 20,

      "& li:not(:last-of-type)": {
        marginBottom: 8,
      },
    },
  },

  "& main": {
    width: "100%",

    "& .products": {
      margin: "50px 0 0",
      display: "grid",
      gap: 24,
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  },
}));
