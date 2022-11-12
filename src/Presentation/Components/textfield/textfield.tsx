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
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
} & Pick<MuiTextFieldProps, "placeholder" | "type" | "id">;

const StyledTextField = styled("label")(({ theme: Theme }) => ({
  height: "48px",
  width: "100%",
  padding: "4px 12px",
  backgroundColor: "#f5f5f5",
  borderRadius: 6,
  display: "flex",
  alignItems: "center",
  color: theme.typography.caption.color,

  "& .label": {
    fontSize: "0.6em",
    margin: 0,
    padding: 0,
    fontWeight: theme.typography.fontWeightMedium,
  },

  "& input": {
    width: "100%",
    padding: 0,
    border: "none",
    backgroundColor: "transparent",
    outline: "none",
  },
}));

export const TextField = ({
  id,
  startAdornment,
  endAdornment,
  label,
  ...props
}: TextFieldProps) => {
  return (
    <StyledTextField htmlFor={id}>
      {startAdornment}
      <Box
        width="100%"
        marginLeft={startAdornment ? 2 : 0}
        marginRight={endAdornment ? 2 : 0}
        display="flex"
        flexDirection="column"
      >
        {label && <span className="label">{label}</span>}
        <input {...props} id={id} />
      </Box>
      {endAdornment}
    </StyledTextField>
  );
};

export const PasswordTextField = ({
  label,
  id,
  ...props
}: Omit<TextFieldProps, "startAdornment" | "endAdornment" | "type">) => {
  const [visibility, setVisibility] = React.useState(false);

  return (
    <StyledTextField htmlFor={id}>
      <Lock sx={{ width: 20 }} />
      <Box
        width="100%"
        marginLeft={2}
        marginRight={2}
        display="flex"
        flexDirection="column"
      >
        {label && <span className="label">{label}</span>}
        <input {...props} id={id} />
      </Box>
      <IconButton onClick={() => setVisibility(!visibility)} sx={{ width: 28, height: 28, }}>
        {visibility ? <VisibilityOff sx={{ width: 20 }} /> : <Visibility sx={{ width: 20 }} />}
      </IconButton>
    </StyledTextField>
  );
};
