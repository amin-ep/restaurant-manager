import { HTMLInputTypeAttribute, useState } from "react";
import { Path, RegisterOptions, UseFormRegister } from "react-hook-form";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import styled from "styled-components";
import Label from "../ui/Label";
import Input from "./Input";
import ErrorText from "./ErrorText";

export type FieldValues = {
  [key: string]: string;
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  gap: 0.25rem;

  @media (min-width: 640px) {
    gap: 0.5rem;
  }

  @media (min-width: 768px) {
    gap: 0.75rem;
  }

  @media (min-width: 1280px) {
    gap: 1rem;
  }
`;

const InputCover = styled.div`
  position: relative;
  width: 100%;
`;

const EyeButton = styled.button`
  position: absolute;
  right: 0.25rem;
  top: 0.3rem;
  height: min-content;
  background-color: transparent;
  border: none;
  color: var(--color-gray-800);
  cursor: pointer;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  aspect-ratio: 1 /1;

  @media (min-width: 640px) {
    width: 35px;
    top: 0.25rem;
  }

  &:hover {
    background-color: var(--color-gray-200);
  }
`;

function FormControl<TFormValues extends FieldValues>({
  type,
  label,
  errorMessage,
  inputId,
  name,
  register,
  registerOptions,
  placeholder,
}: {
  name: Path<TFormValues>;
  type: HTMLInputTypeAttribute;
  label?: string;
  errorMessage?: string;
  inputId: string;
  register: UseFormRegister<TFormValues>;
  registerOptions: RegisterOptions<TFormValues, Path<TFormValues>> | undefined;
  placeholder?: string;
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <StyledDiv>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <InputCover>
        <Input
          id={inputId}
          type={
            type === "password" ? (!showPassword ? "password" : "text") : type
          }
          {...register(name as Path<TFormValues>, registerOptions)}
          autoComplete="off"
          placeholder={placeholder}
        />
        {type === "password" && (
          <EyeButton
            type="button"
            onClick={() => setShowPassword((show) => !show)}
          >
            {showPassword ? (
              <HiOutlineEyeSlash size={25} />
            ) : (
              <HiOutlineEye size={25} />
            )}
          </EyeButton>
        )}
      </InputCover>
      {errorMessage && <ErrorText>*{errorMessage}</ErrorText>}
    </StyledDiv>
  );
}

export default FormControl;
