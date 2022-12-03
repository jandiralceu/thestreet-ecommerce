import React from "react";

import {
  Box,
  IconButton,
  styled,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import {
  LockRounded as Lock,
  VisibilityRounded as Visibility,
  VisibilityOffRounded as VisibilityOff,
} from "@mui/icons-material";
import theme from "../../../core/theme";

type TextFieldProps = {
  label: string;
  value?: any;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
} & Pick<
  MuiTextFieldProps,
  | "placeholder"
  | "type"
  | "id"
  | "onBlur"
  | "onChange"
  | "name"
  | "error"
  | "helperText"
  | "disabled"
>;

const StyledTextField = styled("label")(({ theme: Theme }) => ({
  height: "48px",
  width: "100%",
  padding: "4px 12px",
  backgroundColor: theme.palette.grey[100],
  borderRadius: 6,
  display: "flex",
  alignItems: "center",
  color: theme.typography.caption.color,

  "&.error": {
    backgroundColor: `${theme.palette.error.light}20`,
    border: `0.5px solid ${theme.palette.error.dark}`
  },

  "& .label": {
    margin: 0,
    padding: 0,
    fontSize: "0.6em",
    fontWeight: theme.typography.fontWeightMedium,
  },

  "& input": {
    padding: 0,
    width: "100%",
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
  },
}));

export const TextField = ({
  id,
  startAdornment,
  endAdornment,
  label,
  error,
  helperText,
  ...props
}: TextFieldProps) => {
  return (
    <StyledTextField htmlFor={id} className={[error && 'error'].join(',')}>
      {startAdornment}
      <Box
        width="100%"
        marginLeft={startAdornment ? 2 : 0}
        marginRight={endAdornment ? 2 : 0}
        display="flex"
        flexDirection="column"
      >
        {label && <span className="label">{label}</span>}
        <input id={id} {...props} />
      </Box>
      {endAdornment}
    </StyledTextField>
  );
};

export const PasswordTextField = ({
  label,
  id,
  error,
  helperText,
  ...props
}: Omit<TextFieldProps, "startAdornment" | "endAdornment" | "type">) => {
  const [visibility, setVisibility] = React.useState(false);

  return (
    <StyledTextField htmlFor={id} {...(error && {className: 'error'})}>
      <Lock sx={{ width: 20 }} />
      <Box
        width="100%"
        marginLeft={2}
        marginRight={2}
        display="flex"
        flexDirection="column"
      >
        {label && <span className="label">{label}</span>}
        <input id={id} type={visibility ? 'text' : 'password'} {...props} />
      </Box>
      <IconButton
        onClick={() => setVisibility(!visibility)}
        sx={{ width: 28, height: 28 }}
      >
        {visibility ? (
          <VisibilityOff sx={{ width: 20 }} />
        ) : (
          <Visibility sx={{ width: 20 }} />
        )}
      </IconButton>
    </StyledTextField>
  );
};
