import {
  Box,
  Container,
  Typography,
  Link as ExternalLink,
} from "@mui/material";

import { StyledFooter } from "./footer.styles";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <StyledFooter>
      <nav>
        <Container>
          <Box className="menu">
            <Box>
              <Typography component="h5">Customer Service</Typography>

              <ul>
                <li>Help & Contact Us</li>
                <li>Returns & Refunds</li>
                <li>Online Stores</li>
                <li>Terms & Conditions</li>
              </ul>
            </Box>
            <Box>
              <Typography component="h5">Company</Typography>

              <ul>
                <li>What We Do</li>
                <li>Available Services</li>
                <li>Latest Posts</li>
                <li>Faqs</li>
              </ul>
            </Box>

            <Box>
              <Typography component="h5">Social Media</Typography>

              <ul>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Pintrest</li>
              </ul>
            </Box>
            <Box>
              <Typography component="h5">Profile</Typography>

              <ul>
                <li>My Account</li>
                <li>Checkout</li>
                <li>Order Tracking</li>
                <li>Help & Support</li>
              </ul>
            </Box>
          </Box>
        </Container>
      </nav>
      <Container>
        <Box className="all-rights-text">
          <Typography variant="caption">
            <>
              &copy; {currentYear}{" "}
              <ExternalLink href="https://jandir.co" target="_blank">
                Jandir Alceu
              </ExternalLink>
              , All rights reserved.
            </>
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};
