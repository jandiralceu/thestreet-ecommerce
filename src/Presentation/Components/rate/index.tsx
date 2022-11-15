import { Box } from "@mui/material";
import { StarRounded as FullStar, StarBorderRounded as EmptyStar, StarHalf as HalfStar } from "@mui/icons-material";

export const Rate = () => {
  return (
    <Box>
      <FullStar sx={{ width: 18 }} />
      <FullStar sx={{ width: 18 }} />
      <FullStar sx={{ width: 18 }} />
      <HalfStar sx={{ width: 18 }} />
      <EmptyStar sx={{ width: 18 }} />
    </Box>
  );
};
