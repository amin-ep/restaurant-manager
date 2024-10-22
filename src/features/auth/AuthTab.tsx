import { useState } from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import AuthTabButtons from "./AuthTabButtons";

function AuthTab() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="max-w-[33rem] bg-gray-50 shadow-2xl overflow-x-hidden rounded-xl p-4">
      <header className="text-center text-5xl text-dark-navy font-semibold py-4">
        <h1>Authentication</h1>
      </header>
      <AuthTabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
      <div
        style={{ transform: `translate(-${activeTab * 51}%)` }}
        className="whitespace-nowrap transition-transform flex flex-row gap-10 justify-center items-center w-fit p-1"
      >
        <LoginForm />
        <SignupForm />
      </div>
    </div>
  );
}

export default AuthTab;
