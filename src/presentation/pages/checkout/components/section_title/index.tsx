import { Box, styled, Typography } from "@mui/material";

type SectionTitleContainerProps = {
  title: string;
  subtitle: string;
};

const SectionTitleContainer = styled(Box)(({ theme }) => ({
  "& p": {
    color: theme.palette.grey[500],
    fontWeight: theme.typography.fontWeightBold,
  },
  "& h3": {
    textTransform: "uppercase",
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export const SectionTitle = ({
  title,
  subtitle,
}: SectionTitleContainerProps) => (
  <SectionTitleContainer>
    <Typography component="p">{subtitle}</Typography>
    <Typography component="h3" className="title">
      {title}
    </Typography>
  </SectionTitleContainer>
);
