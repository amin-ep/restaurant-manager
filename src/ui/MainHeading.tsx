import { ReactNode } from "react";

function MainHeading({
  children,
  extraStyles,
  level = 1,
}: {
  children: ReactNode;
  extraStyles?: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}) {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <HeadingTag
      className={`text-dark-navy font-semibold ${extraStyles && extraStyles}`}
    >
      {children}
    </HeadingTag>
  );
}

export default MainHeading;
