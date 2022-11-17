import { useRef, useState } from "react";
import { Box, IconButton, Rating, Slide, Typography } from "@mui/material";
import {
  VisibilityRounded as QuickLook,
  CloseRounded as Close,
} from "@mui/icons-material";
import { Product, QuantityOperationType } from "../../../models";
import { useDialog } from "../../hooks";
import { PriceLabel } from "../price_label";
import {
  AddToCart,
  BoxModal,
  Container,
  QuickLookButton,
} from "./product_card.styles";
import { useCartContext } from "../../contexts";
import { NumberController } from "../number_controller";
import { RouteName } from "../../utils";

type ProductCardProps = {
  product: Product;
};

const INITIAL_VALUE = 1;

export const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(INITIAL_VALUE);
  const [showButton, setShowButton] = useState(false);
  const { addItem } = useCartContext();
  const containerRef = useRef(null);

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
                mt={2}
                priceFontSize={24}
                price={product.price}
                promotionalPriceFontSize={28}
                promotionalPrice={product.promotionalPrice}
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
                  decrease={() =>
                    updateQuantity(QuantityOperationType.subtract)
                  }
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
    <Container
      to={`${RouteName.shop}/${product.id}`}
      onMouseEnter={(_) => setShowButton(true)}
      onMouseLeave={(_) => setShowButton(false)}
      ref={containerRef}
    >
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
        <Box display="flex" mt={1}>
          <Slide
            in={showButton}
            direction="right"
            container={containerRef.current}
            unmountOnExit
            mountOnEnter
          >
            <AddToCart
              onClick={() => addItem(product.id, { ...product, quantity: 1 })}
            >
              add to cart
            </AddToCart>
          </Slide>
          <Slide
            mountOnEnter
            unmountOnExit
            in={!showButton}
            direction="left"
            container={containerRef.current}
          >
            <Box>
              <PriceLabel
                price={product.price}
                promotionalPrice={product.promotionalPrice}
                sx={{ textAlign: "center" }}
              />
            </Box>
          </Slide>
        </Box>
      </Box>
    </Container>
  );
};
