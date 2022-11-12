import React from "react";
import styled from "@emotion/styled";
import {
  IconButton,
  InputAdornment,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import {
  LockRounded as Lock,
  VisibilityRounded as Visibility,
  VisibilityOffRounded as VisibilityOff,
} from "@mui/icons-material";

type TextFieldProps = {} & Omit<MuiTextFieldProps, "variant">;

const StyledTextField = styled(MuiTextField)({
  "& .MuiFormLabel-root": {
    fontWeight: 400,
  },
});

export const TextField = (props: TextFieldProps) => {
  return <StyledTextField {...props} variant="filled" />;
};

export const PasswordTextField = ({
  InputProps,
  ...props
}: Omit<TextFieldProps, "type">) => {
  const [visibility, setVisibility] = React.useState(false);

  return (
    <StyledTextField
      InputProps={{
        ...InputAdornment,
        startAdornment: (
          <InputAdornment position="start">
            <Lock />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setVisibility(!visibility)}>
              {visibility ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
      variant="filled"
      type={visibility ? "text" : "password"}
    />
  );
};
