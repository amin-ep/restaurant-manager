import { useEffect, useState } from "react";
import {
  FieldValues,
  Path,
  PathValue,
  RegisterOptions,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { LuMinus, LuPlus } from "react-icons/lu";
import styled, { css } from "styled-components";
import ErrorText from "../ui/ErrorText";
import Input from "../ui/Input";
import Label from "../ui/Label";

const GapStyle = css`
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

const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${GapStyle}
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 44px minmax(150px, auto) 44px;
  grid-template-rows: 40px;

  ${GapStyle}
`;

const Button = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-radius: 6px;
  outline: none;
  cursor: pointer;

  border: 1px solid var(--color-gray-200);
  color: var(--color-gray-800);

  transition: 0.1s all;

  &:hover {
    background: var(--color-gray-100);
  }

  &:active {
    scale: 1.1;
  }

  &:focus {
    border: 1px solid var(--color-emerald-500);
  }
`;

function CounterControl<T extends FieldValues>({
  label,
  name,
  register,
  errorMessage,
  registerOptions,
  setValue,
  initialValue,
  inputId,
}: {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errorMessage?: string;
  registerOptions: RegisterOptions<T>;
  setValue: UseFormSetValue<T>;
  initialValue?: number;
  inputId: string;
}) {
  const [count, setCount] = useState(initialValue ?? 0);

  const increase = () => {
    setCount((state) => state + 1);
  };

  const decrease = () => {
    if (count - 1 < 0) {
      return;
    } else {
      setCount((state) => state - 1);
    }
  };

  useEffect(() => {
    setValue(name, count.toString() as PathValue<T, Path<T>>);
  }, [count]);

  return (
    <Container>
      <Label htmlFor={inputId}>{label}</Label>
      <ButtonContainer>
        <Button type="button" onClick={decrease}>
          <LuMinus />
        </Button>
        <Input
          type="number"
          value={count === 0 ? "" : count}
          min={0}
          {...register(name, {
            ...registerOptions,
            onChange: (e) => {
              setCount(+e.target.value);
            },
          })}
          step={0.01}
          id={inputId}
        />
        <Button onClick={increase} type="button">
          <LuPlus />
        </Button>
      </ButtonContainer>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </Container>
  );
}

export default CounterControl;
