import { Path, RegisterOptions, UseFormRegister } from "react-hook-form";
import { FieldValues } from "./FormControl";
import styled from "styled-components";
import Label from "./Label";
import ErrorText from "./ErrorText";

const Container = styled.div`
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

const StyledFileInput = styled.input`
  border: 1px dashed var(--color-gray-200);
  padding: 0.75rem;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  color: var(--color-gray-800);

  &::file-selector-button {
    padding: 0.5rem;
    appearance: none;
    background: var(--color-emerald-500);
    border-radius: 6px;
    border: none;
    color: #ffffff;
    font-size: 17px;
    cursor: pointer;

    &:hover {
      background-color: var(--color-emerald-600);
    }
  }
`;

function FileInput<TFormValues extends FieldValues>({
  name,
  register,
  registerOptions,
  id,
  label,
  errorMessage,
}: {
  name: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
  registerOptions: RegisterOptions<TFormValues, Path<TFormValues>> | undefined;
  errorMessage?: string;
  id: string;
  label?: string;
}) {
  return (
    <Container>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledFileInput
        type="file"
        id={id}
        accept="image/*"
        {...register(name as Path<TFormValues>, registerOptions)}
      />
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </Container>
  );
}

export default FileInput;
