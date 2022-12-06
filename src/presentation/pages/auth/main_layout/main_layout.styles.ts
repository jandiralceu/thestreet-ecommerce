import { Card, styled } from "@mui/material";
import { motion } from 'framer-motion';

export const SectionContainer = styled(motion.section)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  backgroundColor: theme.palette.grey[200],

  [theme.breakpoints.down('md')]: {
    padding: '0 20px',
  },

  "& .mobile-download-app": {
    marginTop: 20,
  },

  "& .all-rights-text": {
    margin: '20px 0 ',
    fontSize: 12,

    "& a": {
      marginLeft: 4,
      color: theme.palette.primary.light,
    },
  },
}));

export const CardContainer = styled(Card)(({ theme }) => ({
  width: 860,
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: "1fr",
    width: "100%",
  },

  "& .cover-container": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: theme.palette.primary.light,

    [theme.breakpoints.down('md')]: {
      display: "none",
      margin: '0 10px',
    },
  },

  "& main": {
    padding: 60,
    backgroundColor: "#fff",

    [theme.breakpoints.down('md')]: {
      padding: 20,
    },
  },
}));
