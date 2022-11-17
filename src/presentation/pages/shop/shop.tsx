import { Box, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ProductCard } from '../../components';
import { useProductContext } from '../../contexts';
import { RouteName } from '../../utils';

const ShopContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: 20,

  '& .filters': {
    minWidth: 260,

    '& h2': {
      marginBottom: 12,
      textTransform: 'uppercase',
      fontWeight: theme.typography.fontWeightBold,
    },

    '& .categories': {
      marginTop: 20,

      '& li:not(:last-of-type)': {
        marginBottom: 8,
      }
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
  const { products, productCategories: categories } = useProductContext(); 
  
  return (
    <ShopContainer>
      <Box component="section" className='filters'>
        <Typography component="h2">Category</Typography>

        <ul className="categories">
          <li><Link to={RouteName.shop}>All</Link></li>
          
          {categories.map((category) => (
            <li key={category}><Link to={RouteName.shop}>{category.toUpperCase()}</Link></li>
          ))}
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
