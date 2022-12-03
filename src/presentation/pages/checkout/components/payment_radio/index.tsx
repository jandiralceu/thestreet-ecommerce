import { Box, Radio, RadioProps, styled, Typography } from "@mui/material";

const RadioContainer = styled("label")(({ theme }) => ({
  padding: '4px 0 4px 12px',
  minHeight: 50,
  borderRadius: 6,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  border: `1px solid ${theme.palette.grey[200]}`,
  backgroundColor: theme.palette.grey[100],

  '& .label': {
    fontSize: 14,
    marginLeft: 8,
  }
}));

type PaymentRadioProps = {
  label: string;
  prefixIcon?: React.ReactNode;
} & RadioProps;

export const PaymentRadio = ({
  label,
  prefixIcon,
  ...rest
}: PaymentRadioProps) => {
  return (
    <RadioContainer htmlFor="">
      <Box display="flex" alignItems="center">
        {prefixIcon}
        <Typography component="span" className="label">{label}</Typography>
      </Box>
      <Radio {...rest} />
    </RadioContainer>
  );
};
