import { createContext, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface iCartContextProps {
  children: React.ReactNode;
}

interface iAddCardContextProps {
  id?: string;
  category?: any;
  price?: any;
  name?: any;
  img?: any;
}

interface iCartContext {
  toLoginPage: any;
  getProducts: any;
  disconnect: any;
  dataCard: any;
  getCard: any;
  shopCard: any;
  addShopCard: any;
  modalVisibilit: boolean;
  setModalVisibilit: any;
  shopCost: number;
  deleteCards: any;
  decreaseShopCost: any;
}

export const CartContext = createContext({} as iCartContext);

export const CartProvider = ({ children }: iCartContextProps) => {
  const navigate = useNavigate();
  const [dataCard, setDataCard] = useState([]);
  const [shopCard, setShopCard] = useState<Array<iAddCardContextProps>>([]);
  const [modalVisibilit, setModalVisibilit] = useState(false);
  const [shopCost, setShopCost] = useState<number>(0);

  function addShopCard(children: iAddCardContextProps) {
    setShopCard([
      ...shopCard,
      {
        id: children.id,
        category: children.category,
        price: children.price,
        name: children.name,
        img: children.img,
      },
    ]);

    setShopCost(shopCost + children.price);
  }

  function deleteCards() {
    setShopCost(0);
    return setShopCard([]);
  }

  function disconnect() {
    localStorage.clear();
    navigate("/");
  }

  function decreaseShopCost(key: any, value: number) {
    setShopCard(shopCard.filter((item) => item.id !== key));
    setShopCost(shopCost - value);
  }

  const getCard = async () => {
    try {
      const response = await api.get("/products");
      setDataCard(response.data);
    } catch (error) {}
  };

  const errorToastGetProducts = (data: any) => {
    toast.error("Ops! Algo deu errado", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    toast.warning(data, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const toLoginPage = () => {
    navigate("/login");
  };

  async function getProducts() {
    try {
      return await api.get("/products");
    } catch (error: any) {
      errorToastGetProducts(error);
      navigate("/login");
    }
  }

  return (
    <CartContext.Provider
      value={{
        toLoginPage,
        getProducts,
        disconnect,
        getCard,
        addShopCard,
        modalVisibilit,
        setModalVisibilit,
        dataCard,
        shopCard,
        shopCost,
        deleteCards,
        decreaseShopCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
