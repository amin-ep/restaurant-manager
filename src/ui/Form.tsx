import { FormEventHandler, ReactNode } from "react";

function Form({
  children,
  onSubmit,
  extraStyles,
}: {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
  extraStyles?: string;
}) {
  return (
    <form
      onSubmit={onSubmit}
      className={`${extraStyles} w-[30rem] max-w-full flex flex-col gap-3`}
    >
      {children}
    </form>
  );
}

export default Form;
