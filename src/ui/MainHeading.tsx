import { ReactNode } from "react";

function MainHeading({
  children,
  extraStyles,
}: {
  children: ReactNode;
  extraStyles?: string;
}) {
  return (
    <h2
      className={`text-3xl text-dark-navy font-semibold ${
        extraStyles && extraStyles
      }`}
    >
      {children}
    </h2>
  );
}

export default MainHeading;
