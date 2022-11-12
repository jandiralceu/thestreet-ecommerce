import styled from "@emotion/styled";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

type SocialButtonProps = {} & Omit<MuiButtonProps, 'fullWidth'>;

const Button = styled(MuiButton)({
    backgroundColor: '#fff',
    color: '#000',
    textTransform: 'none',
    border: 'none',
    fontSize: 12
});

export const SocialButton = ({ children, ...props }: SocialButtonProps) => {
  return <Button fullWidth variant="contained" {...props}>{children}</Button>;
};
