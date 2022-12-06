import { styled } from "@mui/material";
import { motion } from "framer-motion";

export const Main = styled(motion.main)(() => ({
  "& .hero": {
    display: "grid",
    height: "50vh",
    gap: 20,
    gridTemplateAreas: `
        "highlight1 highlight2"
        "highlight1 highlight3"
      `,
    gridTemplateColumns: "2fr 1fr",

    "& a": {
      backgroundColor: "#f3f3f3",

      "&.area1": {
        gridArea: "highlight1",
        backgroundImage: `url(${require("../../assets/images/highlight_product.jpg")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      },

      "&.area2": {
        gridArea: "highlight2",
        backgroundImage: `url(${require("../../assets/images/male.jpg")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      },

      "&.area3": {
        gridArea: "highlight3",
        backgroundImage: `url(${require("../../assets/images/female.jpg")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      },
    },
  },

  "& .welcome": {
    "& p": {
      width: "60%",
    },
  },
}));
