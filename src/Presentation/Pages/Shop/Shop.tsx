import { Box, styled, Typography } from '@mui/material';
import { ProductCard } from '../../components';
import { useProductContext } from '../../contexts';

const ShopContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: 20,

  '& .filters': {
    minWidth: 260,

    '& h2': {
      marginBottom: 12,
      textTransform: 'uppercase',
      fontWeight: theme.typography.fontWeightBold,
    }
  },

  '& main': {
    width: '100%',

    '& .products': {
      margin: '50px 0 0',
      display: 'grid',
      gap: 24,
      gridTemplateColumns: 'repeat(4, 1fr)',
    }
  }
}))

const ShopPage = () => {
  const { products } = useProductContext(); 
  return (
    <ShopContainer>
      <Box component="section" className='filters'>
        <Typography component="h2">Category</Typography>

        <ul>
          <li>All</li>
          <li>Hats</li>
        </ul>

      </Box>

      <main>
        <header>
          <Typography>Showing 1-12 of 57 results</Typography>
        </header>

        <Box className='products'>
          {products?.map((product) => <ProductCard product={product} key={product.id} />)}
        </Box>
      </main>
    </ShopContainer>
  );
};

export default ShopPage;
