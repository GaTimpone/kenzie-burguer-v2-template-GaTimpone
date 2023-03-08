import { useContext } from 'react';
import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../context/CartContext';

type CardProps = {
  shopCard: any;
};

const CartProductList = ({ shopCard }: CardProps) => {
  const { shopCost, deleteCards } = useContext(CartContext);

  return (
    <StyledCartProductList>
      <ul>
        <CartProductCard shopCard={shopCard} />
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>
          R$ {shopCost.toFixed(2)}
        </StyledParagraph>
      </div>
      <StyledButton
        $buttonSize='default'
        $buttonStyle='gray'
        onClick={() => deleteCards()}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
