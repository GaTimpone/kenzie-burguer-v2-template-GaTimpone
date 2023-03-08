import { createContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface iUserContextProps {
  children: React.ReactNode;
}

interface iUserContext {
  onSubmitFunctionLogin: any;
  onSubmitFunctionRegister: any;
}

export interface iLoginFormData {
  email: string;
  password: string;
}

export interface iRegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate = useNavigate();

  const sucessToastLogin = () => {
    toast.success("Você acessou sua conta com sucesso", {
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
  const errorToastLogin = (data: any) => {
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
    toast.warning(data.response.data, {
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

  const sucessToastRegister = () => {
    toast.success("Você acessou sua conta com sucesso", {
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
  const errorToastRegister = (data: any) => {
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
    toast.warning(data.response.data, {
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

  async function onSubmitFunctionLogin(data: iLoginFormData) {
    try {
      const response = await api.post("/login", data);
      sucessToastLogin();

      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("userId", response.data.user.id);

      navigate("/shop");
    } catch (error: any) {
      errorToastLogin(error);
    }
  }

  async function onSubmitFunctionRegister(data: iRegisterFormData) {
    try {
      await api.post("/users", data);
      sucessToastRegister();

      navigate("/");
    } catch (error: any) {
      errorToastRegister(error);
    }
  }

  return (
    <UserContext.Provider
      value={{ onSubmitFunctionLogin, onSubmitFunctionRegister }}
    >
      {children}
    </UserContext.Provider>
  );
};
