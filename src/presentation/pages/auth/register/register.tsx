import { Box, Divider, Typography } from "@mui/material";
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

import "./register.styles.scss";
import { DefaultText, RouteName } from "../../../utils";

import { registrationFormValidation } from "./register.validation";
import { GoogleLogo } from "../../../components/svgs";
import { emailAndPasswordRegistration, googleSignIn } from "../../../../store/store";


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
    <section>
      <Typography variant="h1">Register into {DefaultText.appName}</Typography>

      <Typography variant="caption" component="p" marginTop={2}>
        Hi, There! Register into CRWN, choosing one of the options bellow.
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
    </section>
  );
};

export default RegisterPage;
