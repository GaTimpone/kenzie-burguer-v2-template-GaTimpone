import { iLoginFormData, UserContext } from "../../../context/UserContext";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import { useContext } from "react";
import Input from "../Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const formSchemaLogin = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatório"),
});

const LoginForm = function () {
  const { onSubmitFunctionLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormData>({
    resolver: yupResolver(formSchemaLogin),
  });

  return (
    <StyledForm onSubmit={handleSubmit(onSubmitFunctionLogin)}>
      <Input label="Email" errors={errors} register={register("email")} />
      <Input
        type="password"
        label="Senha"
        errors={errors}
        register={register("password")}
      />
      <StyledButton $buttonSize="default" $buttonStyle="green" type="submit">
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
