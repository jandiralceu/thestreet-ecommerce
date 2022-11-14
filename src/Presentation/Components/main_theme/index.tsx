import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

import { Navbar } from '../navbar';

export const MainTheme = () => {  
  return (
    <Container maxWidth="lg">
      <Navbar />

      <Outlet />
    </Container>
  );
};
