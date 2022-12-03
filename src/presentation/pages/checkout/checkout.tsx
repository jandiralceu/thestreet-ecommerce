import { useStripe, useElements } from "@stripe/react-stripe-js";
import {
  AddRounded,
  CreditCardRounded as CreditCard,
} from "@mui/icons-material";
import { Box, Button, Card, Container, Typography } from "@mui/material";

import { AppLogo, TextField } from "../../components";
import {
  BillingAddressButton,
  CheckoutFormContainer,
  PaymentMethodsContainer,
} from "./checkout.styles";
import { OrderSummary, PaymentRadio, SectionTitle } from "./components";
import { PaypalIcon } from "../../components/svgs";
import { useFormik } from "formik";

enum PaymentMethod {
  Card = "card",
  paypal = "paypal",
}

const CheckoutPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const paymentHandler = async () => {
    if (!stripe || !elements) return;
  };

  const { handleSubmit, values, setFieldValue } =
    useFormik({
      initialValues: {
        paymentMethod: undefined,
      },
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <CheckoutFormContainer onSubmit={handleSubmit}>
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

            <PaymentMethodsContainer>
              <PaymentRadio
                label="Paypal"
                prefixIcon={<PaypalIcon width={24} height={24} />}
                value={PaymentMethod.paypal}
                name="payment-method"
                onClick={() =>
                  setFieldValue("paymentMethod", PaymentMethod.paypal)
                }
                size="small"
                checked={values.paymentMethod === PaymentMethod.paypal}
                inputProps={{
                  'aria-label': PaymentMethod.Card
                }}
              />
              <PaymentRadio
                label="Credit or debit card"
                prefixIcon={<CreditCard />}
                value={PaymentMethod.Card}
                name="payment-method"
                onClick={() =>
                  setFieldValue("paymentMethod", PaymentMethod.Card)
                }
                size="small"
                checked={values.paymentMethod === PaymentMethod.Card}
                inputProps={{
                  'aria-label': PaymentMethod.Card
                }}
              />
            </PaymentMethodsContainer>
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
    </CheckoutFormContainer>
  );
};

export default CheckoutPage;
