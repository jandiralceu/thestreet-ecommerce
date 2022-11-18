import { Box, Rating, styled, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../../../models";
import { NumberController, PriceLabel, ProductCard } from "../../../components";
import { useProductContext } from "../../../contexts";

const ProductDetailsPageContainer = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 50,

  "& .images": {
    display: "grid",
    height: 460,
    gap: 12,
    gridTemplateColumns: "160px 1fr",

    "& img": {
      width: "100%",
    },

    "& .miniatures": {
      display: "grid",
      gap: 12,
      gridTemplateColumn: "1fr",
    },
  },

  "& .controls": {
    display: "flex",
    width: 420,

    "& .add-to-cart": {
      border: "none",
      textTransform: "uppercase",
      backgroundColor: "#000",
      color: "#fff",
      width: "100%",
      cursor: "pointer",
    },
  },
}));

interface TabPanelProps {
  index: number;
  value: number;
}

const TabPanel = ({
  children,
  index,
  value,
  ...props
}: React.PropsWithChildren<TabPanelProps>) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      paddingY={6}
      aria-labelledby={`simple-tab-${index}`}
      {...props}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const RelatedProducts = styled(Box)(() => ({
  display: "grid",
  gap: 20,
  gridTemplateColumns: "repeat(4, 1fr)",
}));

const ProductDetailsPage = () => {
  const params = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>();
  const [value, setValue] = useState(0);
  const { products } = useProductContext();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { findById } = useProductContext();

  useEffect(() => {
    const result = findById(params.slug!);

    setProduct(result);
  }, [params.slug, findById]);

  return !product ? (
    <Box>No Product</Box>
  ) : (
    <>
      <ProductDetailsPageContainer>
        <Box component="section" className="images">
          <Box className="miniatures">
            <Box
              sx={{
                backgroundImage: `url(${product.imageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            />
            <Box
              sx={{
                backgroundImage: `url(${product.imageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            />
            <Box
              sx={{
                backgroundImage: `url(${product.imageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            />
          </Box>

          <Box
            sx={{
              backgroundImage: `url(${product.imageUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          />
        </Box>

        <Box component="section">
          <Typography component="h2" variant="h4">
            {product.name}
          </Typography>
          <PriceLabel
            price={product.price}
            promotionalPrice={product.promotionalPrice}
            priceFontSize={18}
            promotionalPriceFontSize={24}
          />
          <Rating value={3.5} sx={{ marginTop: 5 }} size="small" readOnly />
          <Typography variant="body2" component="p" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            incidunt ratione. Provident doloremque, est beatae assumenda autem
            labore architecto illum. Eos placeat eum explicabo! Doloribus
            repudiandae laborum voluptatem quas! Fugit?
          </Typography>

          <Box mt={4} className="controls">
            <Box>
              <NumberController
                value={1}
                increase={() => {}}
                decrease={() => {}}
              />
            </Box>

            <button onClick={() => {}} type="button" className="add-to-cart">
              Add to Cart
            </button>
          </Box>
        </Box>
      </ProductDetailsPageContainer>

      <Box mt={12} sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Description" {...a11yProps(0)} />
            <Tab label="Additional Information" {...a11yProps(1)} />
            <Tab label="Reviews" {...a11yProps(2)} />
          </Tabs>
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

        <Box component="section"  mt={6}>
          <Typography sx={{ textTransform: "uppercase" }} mt={2}>
            Featured Products
          </Typography>

          <RelatedProducts>
            {products.slice(0, 4)?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </RelatedProducts>
        </Box>
      </Box>
    </>
  );
};

export default ProductDetailsPage;
