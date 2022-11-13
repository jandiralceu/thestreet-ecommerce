import { Link, Outlet } from "react-router-dom";
import { Box, Card, styled, Typography } from "@mui/material";
import { RouteName } from "../../../utils";
import { AppStoreDownloadEn } from "../../../components/svgs";

const SectionContainer = styled('section')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f7f3f3',

  '& .auth-container': {
    width: '860px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',

    '& .cover-container': {
      backgroundColor: theme.palette.primary.light,
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',

      '& .logo-container': {
      },

      '& .cover': {
        '& img': {
          width: '100%',
        }
      },
    },

    '& main': {
      minHeight: '100%',
      padding: '60px',
      backgroundColor: '#fff',
    },
  },
}));

const AuthMainLayout = () => {
  return (
    <SectionContainer>
      <Card className="auth-container">
        <Box paddingY={6} className="cover-container" sx={{
          backgroundImage: `url(${require('../../../assets/images/girl_cover.jpg')})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}>
          <Box marginX={6} className="logo-container">
            <Link to={RouteName.home}>
              <Typography variant="h1">Awesome</Typography>
            </Link>
          </Box>


          <Box display="flex" justifyContent="center" alignItems="center">
            <img src={require('../../../assets/images/google-play-badge_en.png')} alt="Google Play, Download Button" width={160} />
            <AppStoreDownloadEn />
          </Box>
        </Box>
        
        <main>
          <Outlet />
        </main>
      </Card>
    </SectionContainer>
  );
};

export default AuthMainLayout;
