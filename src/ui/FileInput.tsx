import { Path, RegisterOptions, UseFormRegister } from "react-hook-form";
import { FieldValues } from "./FormControl";

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
    <input
      type="file"
      id={id}
      {...register(name as Path<TFormValues>, validation)}
    />
  );
}

export default FileInput;
