import { forwardRef } from "react";
import { Alert as MuiAlert, AlertProps } from "@mui/lab";

export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
