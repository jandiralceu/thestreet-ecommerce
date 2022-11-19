import { Box, Tab, Tabs as MuiTabs, Typography } from "@mui/material";
import { useState } from "react";

import { TabPanel } from "../tab_panel";

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export const Tabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box mt={12} sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <MuiTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Additional Information" {...a11yProps(1)} />
          <Tab label="Reviews" {...a11yProps(2)} />
        </MuiTabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography component="p" variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque
          dolor voluptas, cum nostrum ipsum quod assumenda incidunt vitae
          aliquid nesciunt consequatur, blanditiis libero unde, modi molestiae
          rerum est deleniti!
        </Typography>
        <br />
        <Typography component="p" variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque
          dolor voluptas, cum nostrum ipsum quod assumenda incidunt vitae
          aliquid nesciunt consequatur, blanditiis libero unde, modi molestiae
          rerum est deleniti!
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography component="p" variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque
          dolor voluptas, cum nostrum ipsum quod assumenda incidunt vitae
          aliquid nesciunt consequatur, blanditiis libero unde, modi molestiae
          rerum est deleniti!
        </Typography>
        <br />
        <Typography component="p" variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque
          dolor voluptas, cum nostrum ipsum quod assumenda incidunt vitae
          aliquid nesciunt consequatur, blanditiis libero unde, modi molestiae
          rerum est deleniti!
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography component="p" variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque
          dolor voluptas, cum nostrum ipsum quod assumenda incidunt vitae
          aliquid nesciunt consequatur, blanditiis libero unde, modi molestiae
          rerum est deleniti!
        </Typography>
        <br />
        <Typography component="p" variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque
          dolor voluptas, cum nostrum ipsum quod assumenda incidunt vitae
          aliquid nesciunt consequatur, blanditiis libero unde, modi molestiae
          rerum est deleniti!
        </Typography>
      </TabPanel>
    </Box>
  );
};
