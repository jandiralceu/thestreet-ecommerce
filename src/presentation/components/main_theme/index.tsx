import { Link, Outlet, useLocation } from "react-router-dom";
import useBreadcrumbs, { BreadcrumbData } from "use-react-router-breadcrumbs";
import {
  Box,
  Breadcrumbs,
  Container as MuiContainer,
  styled,
} from "@mui/material";

import { Navbar } from "../navbar";
import { Footer } from "../footer";
import { RouteName } from "../../utils";

const MainThemeContainer = styled(Box)(() => ({
  minHeight: "100vh",
}));

const Container = styled(MuiContainer)(() => ({
  '& .content': {
    minHeight: "100vh",
  }
}));

const BreadcrumbsContainer = styled(Box)(() => ({
  backgroundColor: '#fafafa',
}));

export const MainTheme = () => {
  const breadcrumbs = useBreadcrumbs();
  const location = useLocation();

  return (
    <MainThemeContainer>
      <Container maxWidth="lg">
        <Navbar />
      </Container>

      {location.pathname != RouteName.home && (
        <BreadcrumbsContainer paddingY={4}>
          <Container maxWidth="lg">
            <Breadcrumbs aria-label="breadcrumb">
              {breadcrumbs.map(
                ({ breadcrumb, key }: BreadcrumbData, index: number) => {
                  return breadcrumbs.length - 1 == index ? (
                    breadcrumb
                  ) : (
                    <Link to={key} key={key}>
                      {breadcrumb}
                    </Link>
                  );
                }
              )}
            </Breadcrumbs>
          </Container>
        </BreadcrumbsContainer>
      )}

      <Container maxWidth="lg" className="content">
        <Box mt={8}>
          <Outlet />
        </Box>
      </Container>
      <Footer />
    </MainThemeContainer>
  );
};
