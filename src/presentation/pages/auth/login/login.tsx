import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { EmailRounded as Email } from "@mui/icons-material";
import { Box, Divider, styled, Typography } from "@mui/material";

import { SocialButton } from "../components";

import {
  PasswordTextField,
  SubmitButton,
  TextField,
} from "../../../components";
import { RouteName } from "../../../utils";

import { loginFormValidation } from "./login.validation";
import { GoogleLogo } from "../../../components/svgs";
import { emailAndPasswordSignIn, googleSignIn } from "../../../../store/store";

const SigninSection = styled("section")(({ theme }) => ({
  "& h2": {
    fontSize: 24,
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,

    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      marginBottom: 8,
      fontSize: 18,
    },
  },

  "& .or-text": {
    color: theme.palette.primary.light,
  },

  "& form": {
    "& .forgot-password": {
      textDecoration: "underline",
    },
  },

  "& .registration-link": {
    "& a": {
      fontWeight: theme.typography.fontWeightBold,
      textDecoration: "underline",
    },
  },
}));

const LoginPage = () => {
  const dispatch = useDispatch();

  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginFormValidation(),
      onSubmit: (values) => {
        dispatch(emailAndPasswordSignIn(values));
      },
    });

  return (
    <SigninSection>
      <Typography component="h2">Sign in</Typography>

      <Typography variant="caption" marginTop={2}>
        Welcome back! Sign in with your data that you entered during
        registration.
      </Typography>

      <Box marginTop={4}>
        <SocialButton
          onClick={() => dispatch(googleSignIn())}
          startIcon={<GoogleLogo width={24} height={24} />}
        >
          Login with Google
        </SocialButton>
      </Box>

      <Divider sx={{ marginTop: 3 }}>
        <Typography variant="subtitle2" component="span" className="or-text">or</Typography>
      </Divider>

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
        <Typography variant="caption" className="registration-link">
          Don't have an account? <Link to={RouteName.register}>Register</Link>
        </Typography>
      </Box>
    </SigninSection>
  );
};

export default LoginPage;
