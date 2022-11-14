import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { RouteName } from "../../utils";

// const categories: CategoryContainerProps[] = [
//     {
//         id: 1,
//         title: "hats",
//         imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
//       },
//       {
//         "id": 2,
//         title: "jackets",
//         imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
//       },
//       {
//         "id": 3,
//         title: "sneakers",
//         imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
//       },
//       {
//         "id": 4,
//         title: "women",
//         imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"
//       },
//       {
//         "id": 5,
//         title: "men",
//         imageUrl: "https://i.ibb.co/R70vBrQ/men.png"
//       }
// ];

const Main = styled("main")(() => ({
  "& .hero": {
    display: "grid",
    height: "50vh",
    gap: 20,
    gridTemplateAreas: `
    "highlight1 highlight2"
    "highlight1 highlight3"
  `,

    "& a": {
      backgroundColor: "#f3f3f3",

      "&.area1": {
        gridArea: "highlight1",
      },

      "&.area2": {
        gridArea: "highlight2",
      },

      "&.area3": {
        gridArea: "highlight3",
      },
    },
  },

  '& .welcome': {

    '& p': {
      width: '60%',
    },
  },

  '& .carrousel': {
    display: 'grid',
    gap: 20,
    gridTemplateColumns: 'repeat(4, 1fr)',

    '& .product': {
      height: 200,
      backgroundColor: "#f3f3f3",
    },
  },
}));

const HomePage = () => {
  return (
    <Main>
      <Box component="section" className="hero">
        <Link to={RouteName.shop} className="area1"></Link>
        <Link to={RouteName.shop} className="area2"></Link>
        <Link to={RouteName.shop} className="area3"></Link>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        marginY={14}
        component="section"
        className="welcome"
      >
        <Typography variant="h4" sx={{ textTransform: 'uppercase' }}>Welcome</Typography>
        <Typography component="p" sx={{ marginTop: 2, textAlign: "center" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsam
          veniam quidem. Sapiente, molestias. Nihil voluptate omnis quidem.
        </Typography>
      </Box>

      <Box component="section">
        <Typography sx={{ textTransform: 'uppercase' }}>Featured Products</Typography>

        <Box className="carrousel" mt={2} mb={12}>
          <Box className="product"></Box>
          <Box className="product"></Box>
          <Box className="product"></Box>
          <Box className="product"></Box>
        </Box>
      </Box>
    </Main>
  );
};

export default HomePage;
