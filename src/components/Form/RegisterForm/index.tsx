import { iRegisterFormData, UserContext } from "../../../context/UserContext";
import Input from "../Input";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formSchemaRegister = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatório"),
  confirmPassword: yup
    .string()
    .required("Confirme a sua Senha")
    .oneOf([yup.ref("password")], "Senhas não compativeis"),
});

const RegisterForm = function () {
  const { onSubmitFunctionRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormData>({
    resolver: yupResolver(formSchemaRegister),
  });

  return (
    <StyledForm onSubmit={handleSubmit(onSubmitFunctionRegister)}>
      <Input label="Nome" errors={errors} register={register("name")} />
      <Input label="Email" errors={errors} register={register("email")} />
      <Input
        type="password"
        label="Senha"
        errors={errors}
        register={register("password")}
      />
      <Input
        type="password"
        label="Confirme sua Senha"
        errors={errors}
        register={register("confirmPassword")}
      />
      <StyledButton $buttonSize="default" $buttonStyle="gray" type="submit">
        Cadastrar
      </StyledButton>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </StyledForm>
  );
};

export default RegisterForm;
