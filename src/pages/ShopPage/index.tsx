import { StyledShopPage } from "./style";
import CartModal from "../../components/CartModal";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";

import { StyledContainer } from "../../styles/grid";
import { StyledProductList } from "../../components/ProductList/style";
import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";

const ShopPage = () => {
  const { getCard } = useContext(CartContext);

  useEffect(() => {
    getCard();
  }, []);

  return (
    <StyledShopPage>
      <CartModal />
      <Header />
      <main>
        <StyledContainer containerWidth={1300}>
          <StyledProductList>
            <ProductList />
          </StyledProductList>
        </StyledContainer>
      </main>
    </StyledShopPage>
  );
};

export default ShopPage;
