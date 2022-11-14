import { Box } from '@mui/material';
import { useProductContext } from '../../contexts';


const ShopPage = () => {
  const { products } = useProductContext(); 
  return (
    <Box>
      <h1>Shop Page</h1>

      {products?.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
        </div>
      ))}
    </Box>
  );
};

export default ShopPage;
