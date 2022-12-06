import { styled } from "@mui/material";
import { motion } from "framer-motion";

export const Main = styled(motion.main)(({ theme }) => ({
  "& .hero": {
    display: "grid",
    height: "50vh",
    gap: 20,
    gridTemplateAreas: `
        "highlight1 highlight2"
        "highlight1 highlight3"
      `,
    gridTemplateColumns: "2fr 1fr",

    [theme.breakpoints.down('md')]: {
      display:'flex',
    },

    "& a": {
      backgroundColor: theme.palette.grey[100],

      "&.area1": {
        gridArea: "highlight1",
        backgroundImage: `url(${require("../../assets/images/highlight_product.jpg")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        [theme.breakpoints.down('md')]: {
          flex: 1,
        },
      },

      "&.area2": {
        gridArea: "highlight2",
        backgroundImage: `url(${require("../../assets/images/male.jpg")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",

        [theme.breakpoints.down('md')]: {
          display:'none',
        },
      },

      "&.area3": {
        gridArea: "highlight3",
        backgroundImage: `url(${require("../../assets/images/female.jpg")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",

        [theme.breakpoints.down('md')]: {
          display:'none',
        },
      },
    },
  },

  "& .welcome": {
    margin: '100px 0',

    [theme.breakpoints.down('sm')]: {
      margin: '80px 0',
    },

    "& h4": {
      textTransform: 'uppercase',

      [theme.breakpoints.down('sm')]: {
        fontSize: 26,
      },
    },
    "& p": {
      marginTop: 10,
      width: "60%",
      textAlign: 'center',

      [theme.breakpoints.down('sm')]: {
        width: "100%",
        padding: '0 6px',
      },
    },
  },
}));
