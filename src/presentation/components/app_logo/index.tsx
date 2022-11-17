import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import { DefaultText, RouteName } from "../../utils";

const Logo = styled('h1')(({ theme }) => ({
    fontSize: 34,
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: "'Dancing Script', sans-serif",
}))

export const AppLogo = () => {
  return (
    <Link to={RouteName.home}>
      <Logo>{DefaultText.appName}</Logo>
    </Link>
  );
};
