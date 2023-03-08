import { useContext } from 'react';
import { MdClose } from 'react-icons/md';
import CartProductList from './CartProductList';

import { StyledCartModalBox } from './style';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import { CartContext } from '../../context/CartContext';

const CartModal = function () {
  const { modalVisibilit, setModalVisibilit, shopCard } =
    useContext(CartContext);
  if (modalVisibilit === false) {
    return null;
  } else if (shopCard[0]) {
    return (
      <StyledCartModalBox>
        <dialog>
          <header>
            <StyledTitle tag='h2' $fontSize='three'>
              Carrinho de compras
            </StyledTitle>
            <button
              type='button'
              aria-label='Fechar'
              onClick={() => {
                setModalVisibilit(false);
              }}
            >
              <MdClose size={21} />
            </button>
          </header>
          <div className='cartBox'>
            <CartProductList shopCard={shopCard} />
          </div>
        </dialog>
      </StyledCartModalBox>
    );
  } else {
    return (
      <StyledCartModalBox>
        <dialog>
          <header>
            <StyledTitle tag='h2' $fontSize='three'>
              Carrinho de compras
            </StyledTitle>
            <button
              type='button'
              aria-label='Fechar'
              onClick={() => {
                setModalVisibilit(false);
              }}
            >
              <MdClose size={21} />
            </button>
          </header>
          <div className='emptyBox'>
            <StyledTitle tag='h3' $fontSize='three' textAlign='center'>
              Sua sacola está vazia
            </StyledTitle>

            <StyledParagraph textAlign='center'>Adicione itens</StyledParagraph>
          </div>
        </dialog>
      </StyledCartModalBox>
    );
  }
};

export default CartModal;
