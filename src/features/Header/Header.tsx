import { useEffect, useRef, useState } from "react";
import HeaderNav from "./HeaderNav";
import HeaderSection from "./HeaderSection";

function Header() {
  const headerRef = useRef<HTMLHeadElement>(null);
  const [navPosition, setNavPosition] = useState<"static" | "fixed">("static");

  useEffect(() => {
    document.addEventListener("scroll", function () {
      if (
        headerRef.current!.getBoundingClientRect().height <
        headerRef.current!.getBoundingClientRect().y * -1
      ) {
        setNavPosition("fixed");
      } else {
        setNavPosition("static");
      }
    });
  }, []); // FIXME

  return (
    <header
      ref={headerRef}
      className="min-h-dvh bg-fixed"
      style={{
        background: "url('/public/images/pizza-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="grid grid-cols-1 grid-rows-[75px_1fr] bg-black/75 min-h-dvh text-white items-center">
        <HeaderNav position={navPosition} />
        <HeaderSection />
      </div>
    </header>
  );
}

export default Header;
