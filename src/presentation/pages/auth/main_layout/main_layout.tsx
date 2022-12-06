import { Outlet } from "react-router-dom";
import { Box, Link as ExternalLink, Typography } from "@mui/material";
import { AppStoreDownloadEn } from "../../../components/svgs";

import { CardContainer, SectionContainer } from "./main_layout.styles";
import { AppLogo } from "../../../components";

const AuthMainLayout = () => {
  return (
    <SectionContainer>
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
        >
          <Box display="flex" justifyContent="center" alignItems="center">
            <ExternalLink href="https://jandir.co" target="_blank">
              <img
                src={require("../../../assets/images/google-play-badge_en.png")}
                alt="Google Play, Download Button"
                width={160}
              />
            </ExternalLink>

            <ExternalLink href="https://jandir.co" target="_blank">
              <AppStoreDownloadEn />
            </ExternalLink>
          </Box>
        </Box>

        <main>
          <Outlet />
        </main>
      </CardContainer>

      <Typography className="all-rights-text">
        All rights reserved to &copy;{" "}
        <ExternalLink href="https://jandir.co" target="_blank">
          Jandir Alceu
        </ExternalLink>
        .
      </Typography>
    </SectionContainer>
  );
};

export default AuthMainLayout;
