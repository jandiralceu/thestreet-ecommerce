import { Outlet } from "react-router-dom";
import { Box, Link as ExternalLink, Typography } from "@mui/material";

import { CardContainer, SectionContainer } from "./main_layout.styles";
import { AppLogo } from "../../../components";
import { DownloadApp } from "../components";
import { routeAnimationProps } from "../../../utils";

const currentYear = new Date().getFullYear;

const AuthMainLayout = () => {
  return (
    <SectionContainer {...routeAnimationProps}>
      <Box marginX={6} className="logo-container">
        <AppLogo />
      </Box>

      <CardContainer>
        <Box
          paddingY={6}
          className="cover-container"
          sx={{
            backgroundImage: `url(${require("../../../assets/images/girl_cover.jpg")})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        />

        <main>
          <Outlet />
        </main>
      </CardContainer>

      <Box className="mobile-download-app">
        <DownloadApp />
      </Box>

      <Typography className="all-rights-text">
        <>
          &copy; {currentYear}
          All rights reserved to
          <ExternalLink href="https://jandir.co" target="_blank">
            Jandir Alceu
          </ExternalLink>
          .
        </>
      </Typography>
    </SectionContainer>
  );
};

export default AuthMainLayout;
