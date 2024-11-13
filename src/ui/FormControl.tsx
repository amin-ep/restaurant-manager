import {
  FormEvent,
  HTMLInputTypeAttribute,
  ReactNode,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";
import Input from "./Input";
import {
  UseFormRegister,
  RegisterOptions,
  Path,
  UseFormWatch,
} from "react-hook-form";

export type FieldValues = {
  [key: string]: string;
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const Label = styled.label<{ focused: "true" | "false" }>`
  color: var(--color-gray-9);

  transition: all 0.3s;

  background-color: var(--color-gray-0);
  width: fit-content;
  padding: 0 2px;
  position: absolute;
  top: ${(props) => (props.focused === "false" ? "0.75rem" : "-0.25rem")};
  left: 1rem;

  font-size: ${(props) => (props.focused === "false" ? "16px" : "13px")};
  z-index: 10;
`;

const ErrorParagraph = styled.p`
  color: #f11b1b;
  font-size: 14px;
`;

function FormControl<TFormValues extends FieldValues>({
  type,
  label,
  errorMessage,
  inputId,
  name,
  register,
  validation,
  children,
  watch,
}: {
  name: Path<TFormValues>;
  type: HTMLInputTypeAttribute;
  label?: string;
  errorMessage?: string;
  inputId: string;
  register: UseFormRegister<TFormValues>;
  validation: RegisterOptions<TFormValues, Path<TFormValues>> | undefined;
  children?: ReactNode | undefined;
  watch: UseFormWatch<TFormValues>;
}) {
  const [inputIsFocused, setInputIsFocused] = useState<boolean>(false);

  const handleOnBlur = (e: FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length >= 1) {
      setInputIsFocused(true);
    } else {
      setInputIsFocused(false);
    }
  };

  useEffect(() => {
    if (watch(name)?.length > 0) {
      setInputIsFocused(true);
    } else {
      setInputIsFocused(false);
    }
  }, [name, watch]);

  return (
    <StyledDiv>
      {label && (
        <Label
          focused={inputIsFocused === true ? "true" : "false"}
          htmlFor={inputId}
        >
          {label}
        </Label>
      )}
      <Input
        id={inputId}
        type={type}
        {...register(name as Path<TFormValues>, validation)}
        onFocus={() => {
          setInputIsFocused(true);
        }}
        onBlur={handleOnBlur}
      />
      {children && children}
      {errorMessage && <ErrorParagraph>*{errorMessage}</ErrorParagraph>}
    </StyledDiv>
  );
}

export default FormControl;
