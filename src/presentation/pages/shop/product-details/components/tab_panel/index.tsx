import { Box } from "@mui/material";

type TabPanelProps = {
  index: number;
  value: number;
};

export const TabPanel = ({
  children,
  index,
  value,
  ...props
}: React.PropsWithChildren<TabPanelProps>) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      paddingY={6}
      aria-labelledby={`simple-tab-${index}`}
      {...props}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
};
