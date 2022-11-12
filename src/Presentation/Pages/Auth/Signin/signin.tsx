import React from "react";
import { Link } from "react-router-dom";
import { EmailRounded as Email } from "@mui/icons-material";
import { Box, Divider, InputAdornment, Typography } from "@mui/material";

import { AuthRepository } from "../../../../repositories";
import { AuthService } from "../../../../services";
import { PasswordTextField, SocialButton, TextField } from "../components";
import { ReactComponent as GoogleLogo } from "../../../assets/images/google_logo.svg";

import "./signin.styles.scss";

const Signin = () => {
  const signWithGoogle = React.useCallback(() => {
    const authService = new AuthService(new AuthRepository());

    authService.signInWithGoogle().then((user) => {
      console.log(user);
    });
  }, []);

  return (
    <section>
      <Typography variant="h1">Sign in to CRWN</Typography>

      <Typography
        variant="caption"
        className="subtitle"
        component="p"
        marginTop={2}
      >
        Welcome back! Sign in with your data that you entered during
        registration.
      </Typography>

      <Box marginTop={4}>
        <SocialButton
          onClick={signWithGoogle}
          startIcon={<GoogleLogo width={24} height={24} />}
        >
          Login with Google
        </SocialButton>
      </Box>

      <Divider sx={{ marginTop: 3 }}>or</Divider>

      <Box component="form" marginTop={4}>
        <TextField
          fullWidth
          size="small"
          label="Email"
          placeholder="anyone@email.domain"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
        />

        <PasswordTextField
          fullWidth
          sx={{
            marginTop: 1,
          }}
          size="small"
          label="Password"
        />
      </Box>

      <Box marginTop={4} sx={{ textAlign: "center" }}>
        <Typography component="p">
          Don't have an account? <Link to="/auth/signup">Register</Link>
        </Typography>
      </Box>
    </section>
  );
};

export default Signin;
