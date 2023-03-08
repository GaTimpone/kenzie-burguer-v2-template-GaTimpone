import { StyledProductCard } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

type CardProps = {
  dataCard: any;
};

const ProductCard = function (dataCard: CardProps) {
  const { addShopCard } = useContext(CartContext);

  return dataCard.dataCard.map((card: any) => (
    <StyledProductCard key={card.id}>
      <div className="imageBox">
        <img src={card.img} alt={card.name} />
      </div>
      <div className="content">
        <StyledTitle tag="h3" $fontSize="three">
          {card.name}
        </StyledTitle>
        <StyledParagraph className="category">{card.category}</StyledParagraph>
        <StyledParagraph className="price">
          {card.price.toFixed(2)}
        </StyledParagraph>
        <StyledButton
          $buttonSize="medium"
          $buttonStyle="green"
          onClick={() => addShopCard(card)}
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  ));
};

export default ProductCard;
