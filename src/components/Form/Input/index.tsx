import { type } from "os";
import { StyledTextField } from "../../../styles/form";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  type?: string;
  label: string;
  errors: any;
  register: UseFormRegisterReturn;
};

const Input = function (props: InputProps) {
  if (props.label == "Nome") {
    return (
      <fieldset>
        <StyledTextField
          label={props.label}
          type={props.type}
          {...props.register}
        />
        {props.errors.name?.message}
      </fieldset>
    );
  } else if (props.label == "Email") {
    return (
      <fieldset>
        <StyledTextField
          label={props.label}
          type={props.type}
          {...props.register}
        />
        {props.errors.email?.message}
      </fieldset>
    );
  } else if (props.label == "Senha") {
    return (
      <fieldset>
        <StyledTextField
          label={props.label}
          type={props.type}
          {...props.register}
        />
        {props.errors.password?.message}
      </fieldset>
    );
  } else {
    return (
      <fieldset>
        <StyledTextField
          label={props.label}
          type={props.type}
          {...props.register}
        />
        {props.errors.confirmPassword?.message}
      </fieldset>
    );
  }
};

export default Input;
