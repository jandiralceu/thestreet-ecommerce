import { IconButton, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  ArrowLeftRounded as Subtract,
  ArrowRightRounded as Add,
} from "@mui/icons-material";

type NumberControllerProps = {
  increase: () => void;
  decrease: () => void;
  value: number;
};

const NumberControllerContainer = styled(Box)(({ theme }) => ({
  height: 48,
  display: "flex",
  alignItems: "center",
  border: `1px solid ${theme.palette.grey[300]}`,
  width: 190,

  [theme.breakpoints.down("md")]: {
    width: 150,
  },

  "& .label": {
    marginLeft: 10,
    width: "auto",

    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },

  "& .control-quantity": {
    display: "flex",
    alignItems: "center",
    margin: "0 10px",
    width: 40,

    [theme.breakpoints.down("md")]: {
      width: 20,
    },
  },
}));

export const NumberController = ({
  value,
  increase,
  decrease,
}: NumberControllerProps) => {
  return (
    <NumberControllerContainer>
      <Typography className="label">Quantity</Typography>
      <Box className="control-quantity">
        <IconButton onClick={decrease}>
          <Subtract />
        </IconButton>
        <Typography component="span">{value}</Typography>
        <IconButton onClick={increase}>
          <Add />
        </IconButton>
      </Box>
    </NumberControllerContainer>
  );
};
