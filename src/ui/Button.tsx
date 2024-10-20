import { ReactNode } from "react";

function Button({
  children,
  type = "button",
  variation = "primary",
  extraClasses,
}: {
  children: ReactNode;
  variation?: "primary" | "secondary" | "tertiary";
  type?: "submit" | "button" | "reset";
  extraClasses?: string;
}) {
  const buttonVariations = {
    primary:
      "bg-pantone  border-pantone text-stone-950 hover:bg-dark-pantone hover:border-dark-pantone hover:text-white",
    secondary:
      "bg-dark-navy hover:bg-navy border-dark-navy hover:border-navy text-white ",
    tertiary:
      "bg-transparent border-white text-white hover:bg-white hover:text-dark-pantone ",
  };

  return (
    <button
      className={`${buttonVariations[variation]} rounded-md transition-all hover:scale-110 py-2 px-5 w-fit border-2 ${extraClasses}`}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
