import { styled, Drawer as MuiDrawer } from "@mui/material";

export const LogoutButton = styled("button")(() => ({
  border: "none",
  width: "fit-content",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  padding: 0,
  backgroundColor: "transparent",

  "& span": {
    fontSize: 14,
    marginLeft: 6,
    color: "#424242",
  },
}));

export const StyledNavbar = styled("nav")(({ theme }) => ({
  padding: "20px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  [theme.breakpoints.down("md")]: {
    padding: "10px 0",
  },

  "& ul": {
    display: "flex",
    textTransform: "uppercase",

    "& li": {
      fontSize: 14,
    },

    "& li:not(:last-of-type)": {
      marginRight: 24,
    },
  },

  "& .main-menu": {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  "& .secondary-menu": {
    "& li": {
      "&.desktop-menu-option": {
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      },
      "&.mobile-menu-option": {
        cursor: "pointer",
        display: "flex",
        alignItems: "center",

        "& span": {
          fontSize: 20,
          marginLeft: 6,
          color: theme.palette.primary.light,
        },

        [theme.breakpoints.up("md")]: {
          display: "none",
        },
      },

      "& a": {
        display: "flex",
        alignItems: "center",

        "& .cart-quantity": {
          display: "flex",
          position: "relative",

          "& p": {
            top: -14,
            right: -10,
            padding: 6,
            width: 20,
            height: 20,
            borderRadius: 20,
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            color: "#fff",
            fontSize: 12,
            backgroundColor: theme.palette.error.main,
          },
        },

        "& span": {
          marginLeft: 6,
        },
      },
    },
  },
}));

export const MenuButton = styled("button")(({ theme }) => ({
  border: "none",
  backgroundColor: "transparent",
}));

export const Drawer = styled(MuiDrawer)(({ theme }) => ({
  '& ul': {
    width: '70vw',
  },
}));
