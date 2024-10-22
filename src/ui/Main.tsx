import { ReactNode } from "react";

function Main({ children }: { children: ReactNode }) {
  return <main className="bg-gray-50">{children}</main>;
}

export default Main;
