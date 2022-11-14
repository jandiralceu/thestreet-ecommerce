import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { EmailRounded as Email } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";

import { SocialButton } from "../components";

import "./login.styles.scss";
import {
  PasswordTextField,
  SubmitButton,
  TextField,
} from "../../../components";
import { DefaultText, RouteName } from "../../../utils";

import { loginFormValidation } from "./login.validation";
import { GoogleLogo } from "../../../components/svgs";
import { useUserContext } from "../../../contexts";


const LoginPage = () => {
  const navigate = useNavigate();
  const { authService } = useUserContext();

  const { handleSubmit, values, handleChange, handleBlur, touched, errors, resetForm } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginFormValidation(),
      onSubmit: async (values) => {
        try {
          await authService!.login(values.email, values.password);
          resetForm();

          navigate(RouteName.home);
        } catch (error: any) {
          console.log(`error ${error?.message}`);
        }
      },
    });

  return (
    <section>
      <Typography variant="h1">Sign into {DefaultText.appName}</Typography>

      <Typography variant="caption" component="p" marginTop={2}>
        Welcome back! Sign in with your data that you entered during
        registration.
      </Typography>

      <Box marginTop={4}>
        <SocialButton
          onClick={async () => {
            try {
              await authService!.loginWithGoogle();

              navigate(RouteName.home);
            } catch(error: any) {
              console.log(`error ${error?.message}`);
            }
          }}
          startIcon={<GoogleLogo width={24} height={24} />}
        >
          Login with Google
        </SocialButton>
      </Box>

      <Divider sx={{ marginTop: 3 }}>or</Divider>

      <Box component="form" marginTop={4} onSubmit={handleSubmit}>
        <TextField
          id="email"
          label="Email"
          startAdornment={<Email sx={{ width: 18 }} />}
          placeholder="me@email.com"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          error={touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />
        <Box marginTop={1}>
          <PasswordTextField
            id="password"
            label="Password"
            value={values.password}
            placeholder="Password"
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.password && !!errors.password}
            helperText={touched.password && errors.password}
          />
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginTop={1}
          marginBottom={3}
        >
          <Box>
            <Typography variant="caption">Remember me</Typography>
          </Box>
          <Typography variant="caption" className="forgot-password">
            Forgot your password?
          </Typography>
        </Box>

        <SubmitButton fullWidth>Login</SubmitButton>
      </Box>

      <Box marginTop={4} sx={{ textAlign: "center" }}>
        <Typography
          variant="caption"
          component="p"
          className="registration-link"
        >
          Don't have an account? <Link to={RouteName.register}>Register</Link>
        </Typography>
      </Box>
    </section>
  );
};

export default LoginPage;
