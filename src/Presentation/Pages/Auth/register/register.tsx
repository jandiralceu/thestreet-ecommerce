import { Box, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { EmailRounded as Email } from "@mui/icons-material";

import { ReactComponent as GoogleLogo } from "../../../assets/images/google_logo.svg";

import { SocialButton } from "../components";
import {
  PasswordTextField,
  SubmitButton,
  TextField,
} from "../../../components";

import "./register.styles.scss";
import { RouteName } from "../../../utils";

const RegisterPage = () => {
  return (
    <section>
      <Typography variant="h1">Register into CRWN</Typography>

      <Typography variant="caption" component="p" marginTop={2}>
        Hi, There! Register into CRWN, choosing one of the options bellow.
      </Typography>

      <Box marginTop={4}>
        <SocialButton startIcon={<GoogleLogo width={24} height={24} />}>
          Register with Google
        </SocialButton>
      </Box>

      <Divider sx={{ marginTop: 3 }}>or</Divider>

      <Box component="form" marginTop={4}>
        <TextField
          startAdornment={<Email sx={{ width: 18 }} />}
          label="Your name"
          placeholder="John Doe"
        />

        <Box marginTop={1}>
          <TextField
            id="email"
            label="Email"
            startAdornment={<Email sx={{ width: 18 }} />}
            placeholder="me@email.com"
          />
        </Box>

        <Box marginTop={1}>
          <PasswordTextField id="password" label="Password" placeholder="Password" />
        </Box>

        <Box marginTop={1}>
          <PasswordTextField id="repeat_password" label="Repeat Password" placeholder="Password" />
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
