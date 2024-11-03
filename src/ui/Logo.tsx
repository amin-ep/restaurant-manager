import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

type Size = "small" | "large";

const Image = styled.img.attrs<{ $size?: Size }>((props) => ({
  $size: props.$size,
}))`
  width: ${(props) => (props.$size === "small" ? "45px" : "110px")};
  height: ${(props) => (props.$size === "small" ? "45px" : "110px")};
  border-radius: 999px;
  object-fit: cover;
  object-position: center;
`;

function Logo({ size = "small" }: { size?: Size }) {
  const location = useLocation();

  if (location.pathname !== "/login")
    return (
      <Link to="/">
        <Image src="/public/images/pizza-icon.png" alt="logo" $size={size} />
      </Link>
    );
  else
    return (
      <div>
        <Image src="/public/images/pizza-icon.png" alt="logo" $size={size} />
      </div>
    );
}

export default Logo;
