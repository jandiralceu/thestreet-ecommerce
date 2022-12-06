import { Box, styled, Link } from "@mui/material";
import { AppStoreDownloadEn } from "../../../../components/svgs";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const DownloadApp = () => (
  <Container>
    <Link href="https://jandir.co" target="_blank">
      <img
        src={require("../../../../assets/images/google-play-badge_en.png")}
        alt="Google Play, Download Button"
        width={160}
      />
    </Link>

    <Link href="https://jandir.co" target="_blank">
      <AppStoreDownloadEn />
    </Link>
  </Container>
);
