import { MdShoppingCart, MdLogout } from "react-icons/md";

import SearchForm from "./SearchForm";
import { StyledHeader } from "./style";
import LogoKenzieBurguer from "../../assets/LogoKenzieBurguer.svg";

import { StyledContainer } from "../../styles/grid";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Header = () => {
  const { disconnect, setModalVisibilit } = useContext(CartContext);

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className="flexGrid">
          <img
            src={LogoKenzieBurguer}
            alt="Kenzie Burguer Logo"
            className="logo"
          />
          <nav className="nav" role="navigation">
            <SearchForm />
            <div className="buttons">
              <button
                type="button"
                onClick={() => {
                  setModalVisibilit(true);
                }}
              >
                <MdShoppingCart size={28} />
              </button>
              <button type="button">
                <MdLogout size={28} onClick={() => disconnect()} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
