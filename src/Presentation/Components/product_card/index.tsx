import { useState } from "react";
import { Box, IconButton, Rating, Typography } from "@mui/material";
import {
  VisibilityRounded as QuickLook,
  CloseRounded as Close,
} from "@mui/icons-material";
import { Product, QuantityOperationType } from "../../../models";
import { useDialog } from "../../hooks";
import { PriceLabel } from "../price_label";
import { BoxModal, Container, QuickLookButton } from "./product_card.styles";
import { useCartContext } from "../../contexts";
import { NumberController } from "../number_controller";

type ProductCardProps = {
  product: Product;
};

const INITIAL_VALUE = 1;

export const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(INITIAL_VALUE);
  const { addItem } = useCartContext();

  const updateQuantity = (operation: QuantityOperationType) => {
    if (operation === QuantityOperationType.add) setQuantity(quantity + 1);
    else {
      if (quantity == 1) return;
      setQuantity(quantity - 1);
    }
  };

  const [openQuickLookModal, closeQuickLookModal] = useDialog(
    {
      maxWidth: "lg",
      hideControls: true,
      content: (
        <BoxModal>
          <Box
            className="modal-product-image"
            sx={{
              backgroundImage: `url(${product.imageUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></Box>
          <Box className="modal-description">
            <Box className="close">
              <IconButton
                onClick={() => {
                  setQuantity(INITIAL_VALUE);
                  closeQuickLookModal();
                }}
              >
                <Close />
              </IconButton>
            </Box>

            <Box className="modal-content">
              <Typography variant="h5">{product.name}</Typography>
              <PriceLabel
                price={product.price}
                mt={2}
                priceFontSize={24}
                promotionalPriceFontSize={28}
              />

              <Rating value={3.5} sx={{ marginTop: 4 }} readOnly />

              <Typography mt={4}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis eos, exercitationem nobis nesciunt pariatur amet
                dolores beatae dicta, dolor alias sit. Obcaecati itaque
                perspiciatis, aperiam nisi maiores sint porro repellendus.
              </Typography>

              <Box className="modal-controllers">
                <NumberController 
                  value={quantity}
                  increase={() => updateQuantity(QuantityOperationType.add)}
                  decrease={() => updateQuantity(QuantityOperationType.subtract)}
                />
                <button
                  onClick={() => {
                    if (quantity > 0) {
                      addItem(product.id, { ...product, quantity });
                    }

                    setQuantity(INITIAL_VALUE);
                    closeQuickLookModal();
                  }}
                  type="button"
                  className="add-to-cart"
                >
                  Add to Cart
                </button>
              </Box>
            </Box>
          </Box>
        </BoxModal>
      ),
    },
    [product, quantity, addItem, setQuantity]
  );

  return (
    <Container to="/shop">
      <Box
        className="product-image"
        sx={{
          backgroundImage: `url(${product.imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <QuickLookButton
          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.preventDefault();
            event.stopPropagation();

            openQuickLookModal();
          }}
        >
          <span>Quick Look</span> <QuickLook sx={{ width: 14 }} />
        </QuickLookButton>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        className="product-info"
      >
        <Typography component="h3" sx={{ marginTop: 2 }}>
          {product.name}
        </Typography>
        <Rating value={3.5} readOnly size="small" />
        <PriceLabel
          price={product.price}
          sx={{ textAlign: "center", marginTop: 1 }}
        />
      </Box>
    </Container>
  );
};
