import { useStripe, useElements } from "@stripe/react-stripe-js";
import {
  AddRounded,
  CreditCardRounded as CreditCard,
} from "@mui/icons-material";
import { Box, Button, Card, Container, Fade, Typography } from "@mui/material";

import { AppLogo, TextField } from "../../components";
import {
  BillingAddressButton,
  CardDetailsContainer,
  CheckoutFormContainer,
  PaymentMethodsContainer,
  SelectPaymentContainer,
  SelectShippingContainer,
} from "./checkout.styles";
import { OrderSummary, CheckoutRadio, SectionTitle } from "./components";
import { FedexIcon, PaypalIcon } from "../../components/svgs";
import { useFormik } from "formik";
import { PaymentMethodOptions, ShippingMethodOptions } from "../../../models";

const CheckoutPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const paymentHandler = async () => {
    if (!stripe || !elements) return;
  };

  const { handleSubmit, values, setFieldValue } = useFormik({
    initialValues: {
      paymentMethod: undefined,
      shippingMethod: undefined,
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

              <Box className="address">
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

                <SelectShippingContainer>
                  <CheckoutRadio
                    label="FedEx"
                    id={ShippingMethodOptions.FedEx}
                    prefixIcon={<FedexIcon width={24} height={24} />}
                    value={ShippingMethodOptions.FedEx}
                    name="shipping-method"
                    onClick={() =>
                      setFieldValue("shippingMethod", ShippingMethodOptions.FedEx)
                    }
                    size="small"
                    checked={values.shippingMethod === ShippingMethodOptions.FedEx}
                    inputProps={{
                      "aria-label": `payment by ${ShippingMethodOptions.FedEx}`,
                    }}
                    subtitle="Delivery Today"
                    suffixText="$ 10.00"
                  />
                  <CheckoutRadio
                    label="DHL"
                    id={ShippingMethodOptions.DHL}
                    prefixIcon={<FedexIcon width={24} height={24} />}
                    value={ShippingMethodOptions.DHL}
                    name="shipping-method"
                    onClick={() =>
                      setFieldValue("shippingMethod", ShippingMethodOptions.DHL)
                    }
                    size="small"
                    checked={values.shippingMethod === ShippingMethodOptions.DHL}
                    inputProps={{
                      "aria-label": `payment by ${ShippingMethodOptions.DHL}`,
                    }}
                    subtitle="Delivery Tomorrow"
                    suffixText="$ 8.00"
                  />
                  <CheckoutRadio
                    label="UPS"
                    id={ShippingMethodOptions.UPS}
                    prefixIcon={<FedexIcon width={24} height={24} />}
                    value={ShippingMethodOptions.UPS}
                    name="shipping-method"
                    onClick={() =>
                      setFieldValue("shippingMethod", ShippingMethodOptions.UPS)
                    }
                    size="small"
                    checked={values.shippingMethod === ShippingMethodOptions.UPS}
                    inputProps={{
                      "aria-label": `payment by ${ShippingMethodOptions.UPS}`,
                    }}
                    subtitle="Delivery Today"
                    suffixText="$ 6.00"
                  />
                  <CheckoutRadio
                    label="Collect in person"
                    id={ShippingMethodOptions.InPerson}
                    prefixIcon={<FedexIcon width={24} height={24} />}
                    value={ShippingMethodOptions.InPerson}
                    name="shipping-method"
                    onClick={() =>
                      setFieldValue("shippingMethod", ShippingMethodOptions.InPerson)
                    }
                    size="small"
                    checked={values.shippingMethod === ShippingMethodOptions.InPerson}
                    inputProps={{
                      "aria-label": `payment by ${ShippingMethodOptions.InPerson}`,
                    }}
                    subtitle="Delivery Today"
                    suffixText="Free"
                  />
                </SelectShippingContainer>
              </Box>
            </Box>
          </Box>

          <Box component="section">
            <SectionTitle title="Payment Method" subtitle="03" />

            <PaymentMethodsContainer>
              <SelectPaymentContainer>
                <CheckoutRadio
                  label="Paypal"
                  id={PaymentMethodOptions.paypal}
                  prefixIcon={<PaypalIcon width={24} height={24} />}
                  value={PaymentMethodOptions.paypal}
                  name="payment-method"
                  onClick={() =>
                    setFieldValue("paymentMethod", PaymentMethodOptions.paypal)
                  }
                  size="small"
                  checked={values.paymentMethod === PaymentMethodOptions.paypal}
                  inputProps={{
                    "aria-label": `payment by ${PaymentMethodOptions.paypal}`,
                  }}
                />
                <CheckoutRadio
                  id={PaymentMethodOptions.Card}
                  label="Credit or debit card"
                  prefixIcon={<CreditCard />}
                  value={PaymentMethodOptions.Card}
                  name="payment-method"
                  onClick={() =>
                    setFieldValue("paymentMethod", PaymentMethodOptions.Card)
                  }
                  size="small"
                  checked={values.paymentMethod === PaymentMethodOptions.Card}
                  inputProps={{
                    "aria-label": `payment by ${PaymentMethodOptions.Card}`,
                  }}
                />
              </SelectPaymentContainer>

              <Fade
                in={values.paymentMethod === PaymentMethodOptions.Card}
                unmountOnExit
              >
                <CardDetailsContainer>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  quaerat mollitia animi quos deleniti minima cum placeat
                  blanditiis suscipit vitae alias saepe illum quas totam,
                  delectus earum rerum similique. Voluptate!Í
                </CardDetailsContainer>
              </Fade>
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
