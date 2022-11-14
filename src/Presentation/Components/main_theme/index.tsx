import { Outlet } from "react-router-dom";
import { Container as MuiContainer, styled } from "@mui/material";

import { Navbar } from '../navbar';
import { Box } from "@mui/system";
import { Footer } from "../footer";

const Container = styled(MuiContainer)(() => ({
  minHeight: '100vh',
}))

export const MainTheme = () => {  
  return (
    <>
      <Container maxWidth="lg">
        <Navbar />

        <Box mt={8}>
          <Outlet  />
        </Box>
      </Container>
      <Footer />
    </>
  );
};
