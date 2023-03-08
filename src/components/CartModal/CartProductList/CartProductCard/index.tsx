import { MdDelete } from 'react-icons/md';
import { useContext } from 'react';

import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContext } from '../../../../context/CartContext';

type CardProps = {
  shopCard: any;
};

const CartProductCard = function (shopCard: CardProps) {
  const { decreaseShopCost } = useContext(CartContext);
  return shopCard.shopCard.map((card: any) => (
    <StyledCartProductCard key={card.id}>
      <div className='imageBox'>
        <img src={card.img} alt={card.name} />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {card.name}
        </StyledTitle>
        <button
          type='button'
          aria-label='Remover'
          onClick={() => decreaseShopCost(card.id, card.price)}
        >
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  ));
};

export default CartProductCard;
