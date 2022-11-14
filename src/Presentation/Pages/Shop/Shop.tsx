import SHOP_DATA from '../../../mocks/shop-data.json';

const ShopPage = () => {
  return (
    <div>
      <h1>Shop Page</h1>

      {SHOP_DATA.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default ShopPage;
