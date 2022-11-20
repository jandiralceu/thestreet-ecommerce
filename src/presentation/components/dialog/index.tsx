import { ReactNode, useMemo } from "react";
import {
  Button,
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps as MuiDialogProps,
  DialogTitle,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { AlertProps } from "@mui/lab";
import {
  CheckCircleRounded,
  ErrorRounded,
  WarningRounded,
  InfoRounded,
} from "@mui/icons-material";
import { yellow } from "@mui/material/colors";

export type DialogProps = {
  actions?: ReactNode;
  buttonLabel?: string;
  hideControls?: boolean;
  onClose?: () => void;
} & Omit<MuiDialogProps, "onClose"> &
  Pick<AlertProps, "severity">;

const StyledDialog = styled(MuiDialog)({
  "& .MuiDialogContent-root": {
    textAlign: "center",
    padding: 0,
  },
  "& .MuiDialogActions-root": {
    justifyContent: "center",
  },
  "& p": {
    fontSize: 14,
  },
  // "& .MuiSvgIcon-root": {
  //   height: 60,
  //   width: 60,
  //   marginBottom: 20,
  // },
});

export const Dialog = ({
  open,
  severity,
  onClose,
  title,
  children,
  maxWidth = "xs",
  actions,
  hideControls = false,
  buttonLabel,
  ...props
}: DialogProps) => {
  const theme = useTheme();
  const fullscreen = useMediaQuery(theme.breakpoints.down("md"));

  const renderIconStatus = useMemo(() => {
    switch (severity) {
      case "success":
        return <CheckCircleRounded color="success" />;
      case "info":
        return <InfoRounded color="primary" />;
      case "error":
        return <ErrorRounded color="error" />;
      case "warning":
        return (
          <WarningRounded style={{ opacity: 0.5, color: yellow["900"] }} />
        );
      default:
        return "";
    }
  }, [severity]);

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      fullScreen={fullscreen}
      aria-labelledby="responsive-dialog-title"
      maxWidth={maxWidth}
      {...props}
    >
      {title ? <DialogTitle>{title}</DialogTitle> : ""}

      <DialogContent>
        {severity ? renderIconStatus : ""}

        <DialogContentText component="div">{children}</DialogContentText>
      </DialogContent>

      {!hideControls && (
        <DialogActions>
          {actions}
          <Button
            type="button"
            variant="text"
            onClick={onClose}
            disableElevation
          >
            {buttonLabel ?? "Close"}
          </Button>
        </DialogActions>
      )}
    </StyledDialog>
  );
};
