import {
  Button as MuiButton,
  styled,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

type ButtonProps = Omit<MuiButtonProps, "variant" | "color" | "type">;

const StyledMuiButton = styled(MuiButton)(({ theme }) => ({
    color: '#fff',
    fontSize: 12,
    fontWeight: theme.typography.fontWeightBold
}));

export const SubmitButton = ({ children, ...props }: ButtonProps) => {
  return (
    <StyledMuiButton type="submit" variant="contained" color="primary" {...props}>
      {children}
    </StyledMuiButton>
  );
};
