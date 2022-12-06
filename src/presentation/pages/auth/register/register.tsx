import { Box, Divider, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import {
  EmailRounded as Email,
  PersonRounded as Person,
} from "@mui/icons-material";

import { SocialButton } from "../components";
import {
  PasswordTextField,
  SubmitButton,
  TextField,
} from "../../../components";

import { DefaultText, RouteName } from "../../../utils";

import { registrationFormValidation } from "./register.validation";
import { GoogleLogo } from "../../../components/svgs";
import { emailAndPasswordRegistration, googleSignIn } from "../../../../store/store";

const RegisterSection = styled("section")(({ theme }) => ({
  "& h2": {
    fontSize: 24,
    fontWeight: theme.typography.fontWeightBold,

    [theme.breakpoints.down('md')]: {
      fontSize: 18,
    },
  },

  "& .login-link": {
    "& a": {
      fontWeight: theme.typography.fontWeightBold,
      textDecoration: "underline",
    },
  },
}));

const RegisterPage = () => {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      repeat_password: "",
    },
    validationSchema: registrationFormValidation(),
    onSubmit: async ({ email, password, fullName: displayName }) => {
      dispatch(emailAndPasswordRegistration({ email, password, displayName }));
    },
  });

  return (
    <RegisterSection>
      <Typography component="h2">Register</Typography>

      <Typography variant="caption" marginTop={2}>
        Hi, There! Register into {DefaultText.appName}, choosing one of the options bellow.
      </Typography>

      <Box marginTop={4}>
        <SocialButton
          onClick={() => dispatch(googleSignIn())}
          startIcon={<GoogleLogo width={24} height={24} />}
        >
          Register with Google
        </SocialButton>
      </Box>

      <Divider sx={{ marginTop: 3 }}>or</Divider>

      <Box component="form" marginTop={4} onSubmit={handleSubmit}>
        <TextField
          id="fullName"
          label="Name"
          value={values.fullName}
          placeholder="John Doe"
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.fullName && !!errors.fullName}
          helperText={touched.fullName && errors.fullName}
          startAdornment={<Person sx={{ width: 18 }} />}
        />

        <Box marginTop={1}>
          <TextField
            id="email"
            label="Email"
            value={values.email}
            placeholder="me@email.com"
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.email && !!errors.email}
            helperText={touched.email && errors.email}
            startAdornment={<Email sx={{ width: 18 }} />}
          />
        </Box>

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

        <Box marginTop={1}>
          <PasswordTextField
            id="repeat_password"
            onBlur={handleBlur}
            value={values.repeat_password}
            onChange={handleChange}
            error={touched.repeat_password && !!errors.repeat_password}
            helperText={touched.repeat_password && errors.repeat_password}
            label="Repeat Password"
            placeholder="Repeat Password"
          />
        </Box>

        <Box marginTop={2} marginBottom={3}>
          <SubmitButton fullWidth>Register</SubmitButton>
        </Box>
      </Box>

      <Box marginTop={4} sx={{ textAlign: "center" }}>
        <Typography variant="caption" component="p" className="login-link">
          Already have an account? <Link to={RouteName.login}>Login</Link>
        </Typography>
      </Box>
    </RegisterSection>
  );
};

export default RegisterPage;
