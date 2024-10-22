import { ReactNode } from "react";

function FormHeading({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3">
      <h3 className="text-4xl text-navy text-center font-semibold">
        {children}
      </h3>
    </div>
  );
}

export default FormHeading;
