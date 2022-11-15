import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ProductCard } from "../../components";
import { useProductContext } from "../../contexts";
import { RouteName } from "../../utils";

const Main = styled("main")(() => ({
  "& .hero": {
    display: "grid",
    height: "50vh",
    gap: 20,
    gridTemplateAreas: `
      "highlight1 highlight2"
      "highlight1 highlight3"
    `,
    gridTemplateColumns: '2fr 1fr',

    "& a": {
      backgroundColor: "#f3f3f3",

      "&.area1": {
        gridArea: "highlight1",
        backgroundImage: `url(${require('../../assets/images/highlight_product.jpg')})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      },
      
      "&.area2": {
        gridArea: "highlight2",
        backgroundImage: `url(${require('../../assets/images/male.jpg')})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      },

      "&.area3": {
        gridArea: "highlight3",
        backgroundImage: `url(${require('../../assets/images/female.jpg')})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
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
  },
}));

const HomePage = () => {
  const { products } = useProductContext(); 
  
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
          {products?.slice(0, 4)?.map((product) => <ProductCard product={product} key={product.id} />)}
        </Box>
      </Box>
    </Main>
  );
};

export default HomePage;
