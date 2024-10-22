import { ReactNode } from "react";

function FormRow({
  id,
  label,
  children,
  errorMessage,
}: {
  id?: string;
  label?: string;
  children: ReactNode;
  errorMessage?: string | undefined;
}) {
  return (
    <div className="flex flex-col w-full py-1 gap-1">
      {label && (
        <label className="font-semibold text-dark-navy w-fit" htmlFor={id}>
          {label}
        </label>
      )}
      {children}
      {errorMessage && (
        <p className="text-red-600 text-sm font-semibold">* {errorMessage}</p>
      )}
    </div>
  );
}

export default FormRow;
