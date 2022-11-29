import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements } from "@stripe/react-stripe-js";
import { AddRounded } from "@mui/icons-material";
import { Box, Button, Card, Container, Typography } from "@mui/material";

import { AppLogo, TextField } from "../../components";
import { BillingAddressButton, CheckoutContainer } from "./checkout.styles";
import { OrderSummary, SectionTitle } from "./components";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY!);

const CheckoutPage = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async () => {
    if (!stripe || !elements) return;
  }

  return (
    <Elements stripe={stripePromise}>
      <CheckoutContainer component="form">
        <Container sx={{ textAlign: "center" }}>
          <AppLogo />
        </Container>
        <Box component="header" paddingY={6}>
          <Container>
            <Typography variant="h4" component="h2" textAlign="center">
              CHECKOUT
            </Typography>
          </Container>
        </Box>
        <Container component="main">
          <Box className="checkout-information">
            <Box component="section">
              <SectionTitle title="Personal Information" subtitle="01" />

              <Box className="personal-information">
                <TextField type="text" label="First Name" />
                <TextField type="text" label="Last name" />
                <TextField type="text" label="Email address" />
                <TextField type="text" label="Phone Number" />
              </Box>
            </Box>

            <Box component="section">
              <SectionTitle title="Shipping Details" subtitle="02" />

              <Box className="shipping-address">
                <Typography component="h4">Shipping address</Typography>

                <Box mt={2} className="address">
                  <Box>
                    <TextField type="text" label="Street address" />
                  </Box>

                  <Box className="fields-row" mt={2}>
                    <TextField type="text" label="Zip Code" />
                    <TextField type="text" label="City" />
                    <TextField type="text" label="Country" />
                  </Box>
                </Box>

                <Box mt={4}>
                  <BillingAddressButton type="button">
                    <AddRounded sx={{ width: 18 }} />
                    <Typography component="span">
                      ADD DIFFERENT BILLING ADDRESS
                    </Typography>
                  </BillingAddressButton>
                </Box>

                <Box mt={5}>
                  <Typography component="h4">Shipping method</Typography>
                </Box>
              </Box>
            </Box>

            <Box component="section">
              <SectionTitle title="Payment Method" subtitle="03" />

              <Box>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum enim accusantium dolor ea at nisi dicta maiores quas
                sapiente explicabo, aspernatur quod cum, expedita exercitationem
                fuga, nesciunt iste eos! Fuga.
              </Box>
            </Box>
          </Box>

          <Box>
            <Card className="order-summary">
              <OrderSummary />

              <Box mt={4}>
                <Button
                  fullWidth
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  Checkout
                </Button>
              </Box>
            </Card>
          </Box>
        </Container>
      </CheckoutContainer>
    </Elements>
  );
};

export default CheckoutPage;
