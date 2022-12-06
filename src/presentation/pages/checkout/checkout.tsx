import { useStripe, useElements } from "@stripe/react-stripe-js";
import {
  AddRounded,
  CreditCardRounded as CreditCard,
  DirectionsWalkRounded as CollectInPerson,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Container,
  Fade,
  Typography,
  useTheme,
} from "@mui/material";
import { useSelector } from "react-redux";

import { AppLogo, TextField } from "../../components";
import {
  BillingAddressButton,
  CardDetailsContainer,
  CardNumber,
  CardExpiryWrapper,
  CheckoutFormContainer,
  ExpirationAndCode,
  PaymentMethodsContainer,
  SelectPaymentContainer,
  SelectShippingContainer,
  CardCvcWrapper,
} from "./checkout.styles";
import { OrderSummary, CheckoutRadio, SectionTitle } from "./components";
import { FedexIcon, PaypalIcon } from "../../components/svgs";
import { useFormik } from "formik";
import { PaymentMethodOptions, ShippingMethodOptions } from "../../../models";

import { selectCartInfo } from "../../../store/cart";
import { selectCurrentUser } from "../../../store/auth";
import { useEffect, useMemo } from "react";
import { StripeElementStyle } from "@stripe/stripe-js";
import { routeAnimationProps } from "../../utils";

const CheckoutPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { total } = useSelector(selectCartInfo);
  const { currentUser } = useSelector(selectCurrentUser);
  const theme = useTheme();

  const customStripeStyles = useMemo((): StripeElementStyle => {
    return {
      base: {
        fontSize: "14px",
        backgroundColor: theme.palette.grey[100],
        fontFamily: "'Fira Sans', sans-serif",
        color: theme.palette.text.primary,
      },
      invalid: {
        color: theme.palette.error.main,
      },
    };
  }, [theme]);

  const paymentHandler = async () => {
    if (!stripe || !elements) return;

    const result = await fetch(
      "/.netlify/functions/create_stripe_payment_intent",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: total }),
      }
    ).then((res) => res.json());

    const cardNumberElement = elements.getElement("cardNumber");

    if (result && cardNumberElement) {
      const clientSecret = result.paymentIntent.client_secret;
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardNumberElement,
          billing_details: {
            name: currentUser!.displayName!,
          },
        },
      });

      if (paymentResult.error) {
        console.log(`Error`);
      } else {
        if (paymentResult.paymentIntent.status === "succeeded") {
          console.log(`Success`);
        }
      }
    }
  };

  const { handleSubmit, values, setFieldValue } = useFormik({
    initialValues: {
      paymentMethod: undefined,
      shippingMethod: undefined,
    },
    onSubmit: (values) => {
      paymentHandler();
    },
  });

  useEffect(() => {
    if (values.paymentMethod === PaymentMethodOptions.Card && elements) {
      if (!elements.getElement("cardNumber")) {
        const cardNumberElement = elements.create("cardNumber", {
          showIcon: true,
          style: customStripeStyles,
        });
        cardNumberElement.mount("#cardNumber");
      }

      if (!elements.getElement("cardExpiry")) {
        const cardExpiryElement = elements.create("cardExpiry", {
          style: customStripeStyles,
        });
        cardExpiryElement.mount("#cardExpiry");
      }

      if (!elements.getElement("cardCvc")) {
        const cardCvcElement = elements.create("cardCvc", {
          style: customStripeStyles,
        });
        cardCvcElement.mount("#cardCvc");
      }
    }
  }, [elements, values.paymentMethod, customStripeStyles]);

  return (
    <CheckoutFormContainer onSubmit={handleSubmit} {...routeAnimationProps}>
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

                <Box className="fields-row">
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

              <Box>
                <Typography component="h4">Shipping method</Typography>

                <SelectShippingContainer>
                  <CheckoutRadio
                    label="FedEx"
                    id={ShippingMethodOptions.FedEx}
                    prefixIcon={<FedexIcon width={24} height={24} />}
                    value={ShippingMethodOptions.FedEx}
                    name="shipping-method"
                    onClick={() =>
                      setFieldValue(
                        "shippingMethod",
                        ShippingMethodOptions.FedEx
                      )
                    }
                    size="small"
                    checked={
                      values.shippingMethod === ShippingMethodOptions.FedEx
                    }
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
                    checked={
                      values.shippingMethod === ShippingMethodOptions.DHL
                    }
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
                    checked={
                      values.shippingMethod === ShippingMethodOptions.UPS
                    }
                    inputProps={{
                      "aria-label": `payment by ${ShippingMethodOptions.UPS}`,
                    }}
                    subtitle="Delivery Today"
                    suffixText="$ 6.00"
                  />
                  <CheckoutRadio
                    label="Collect in person"
                    id={ShippingMethodOptions.InPerson}
                    prefixIcon={<CollectInPerson />}
                    value={ShippingMethodOptions.InPerson}
                    name="shipping-method"
                    onClick={() =>
                      setFieldValue(
                        "shippingMethod",
                        ShippingMethodOptions.InPerson
                      )
                    }
                    size="small"
                    checked={
                      values.shippingMethod === ShippingMethodOptions.InPerson
                    }
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

              <Fade in={values.paymentMethod === PaymentMethodOptions.Card}>
                <CardDetailsContainer>
                  <CardNumber>
                    <Typography component="span">Card number</Typography>
                    <Box id="cardNumber" />
                  </CardNumber>

                  <ExpirationAndCode>
                    <CardExpiryWrapper>
                      <Typography component="span">Exp. Date</Typography>
                      <Box id="cardExpiry" />
                    </CardExpiryWrapper>

                    <CardCvcWrapper>
                      <Typography component="span">Code</Typography>
                      <Box id="cardCvc" />
                    </CardCvcWrapper>
                  </ExpirationAndCode>
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
