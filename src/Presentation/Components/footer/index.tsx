import { Box, Container, styled, Typography } from "@mui/material";
import { DefaultText } from "../../utils";

const StyledFooter = styled("footer")(() => ({
  marginTop: 200,
  // '& nav': {},
  "& nav": {
    padding: "20px 0",
    borderTop: "1px solid #ccc",
    borderBottom: "1px solid #ccc",

    "& .menu": {
      display: "grid",
      gap: 24,
      gridTemplateColumns: "repeat(4, 1fr)",

      "& h5": {
        textTransform: "uppercase",
        marginBottom: 24,
      },

      "& ul": {
        fontSize: 14,
      },
    },
  },
}));

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
      <Container sx={{ padding: "10px 0" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="caption">
          ©{new Date().getFullYear()} {DefaultText.appName}. All Right Reserved.
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};
