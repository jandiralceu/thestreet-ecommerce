import { Box, Radio, RadioProps, styled, Typography } from "@mui/material";

const RadioContainer = styled("label")(({ theme }) => ({
  padding: "4px 0 4px 12px",
  minHeight: 50,
  borderRadius: 6,
  display: "flex",
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "space-between",
  border: `1px solid ${theme.palette.grey[200]}`,
  backgroundColor: theme.palette.grey[100],
  transition: "border-color 0.2s ease-in",

  "&.selected": {
    borderColor: theme.palette.primary.light,

    "& .label": {
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.primary.dark,
    },

    "& .suffix-text": {
      fontSize: 16,
      color: theme.palette.primary.dark,
      fontWeight: theme.typography.fontWeightBold,
    },
  },

  "& .label": {
    fontSize: 14,
  },
  "& .radio-subtitle": {
    fontSize: 10,
    color: theme.palette.grey[600]
  },
  "& .suffix-text": {
    marginRight: 4,
    color: theme.palette.grey[600],
  },
}));

type CheckoutRadioProps = {
  id: string;
  label: string;
  subtitle?: string;
  suffixText?: string;
  prefixIcon?: React.ReactNode;
} & Omit<RadioProps, "id">;

export const CheckoutRadio = ({
  label,
  prefixIcon,
  checked,
  id,
  subtitle,
  suffixText,
  ...rest
}: CheckoutRadioProps) => {
  return (
    <RadioContainer
      htmlFor={id.trim()}
      {...(checked && { className: "selected" })}
    >
      <Box display="flex" alignItems="center">
        {prefixIcon}
        <Box ml={1}>
          <Typography className="label">{label}</Typography>
          {subtitle && (
            <Typography className="radio-subtitle">
              {subtitle}
            </Typography>
          )}
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        {suffixText && (
          <Typography className="suffix-text">
          {suffixText}
        </Typography>
        )}
        <Radio id={id.trim()} checked={checked} {...rest} />
      </Box>
    </RadioContainer>
  );
};
