import { Path, RegisterOptions, UseFormRegister } from "react-hook-form";
import { FieldValues } from "./FormControl";
import styled from "styled-components";

const StyledFileInput = styled.input`
  border: 2px dashed var(--color-gray-2);
  padding: 0.75rem;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  color: var(--color-gray-8);

  &::file-selector-button {
    padding: 0.5rem;
    appearance: none;
    background: var(--color-green-1);
    border-radius: 6px;
    border: none;
    color: #ffffff;
    font-size: 17px;
    cursor: pointer;

    &:hover {
      background-color: var(--color-green-2);
    }
  }
`;

function FileInput<TFormValues extends FieldValues>({
  name,
  register,
  validation,
  id,
}: {
  name: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
  validation: RegisterOptions<TFormValues, Path<TFormValues>> | undefined;
  id: string;
}) {
  return (
    <div>
      <StyledFileInput
        type="file"
        id={id}
        {...register(name as Path<TFormValues>, validation)}
      />
    </div>
  );
}

export default FileInput;
