import { SetStateAction, Dispatch } from "react";

function AuthTabButtons({
  activeTab,
  setActiveTab,
}: {
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="grid grid-cols-2 grid-rows-1 py-5 gap-5">
      <button
        className={`rounded-md shadow-2xl px-6 py-4 text-lg transition-colors duration-300 font-semibold ${
          activeTab === 0 ? "bg-navy text-white" : "bg-white text-navy"
        }`}
        onClick={() => {
          setActiveTab(0);
        }}
      >
        Login
      </button>
      <button
        className={`rounded-md shadow-2xl px-6 py-4 text-lg transition-colors duration-300 font-semibold ${
          activeTab === 1 ? "bg-navy text-white" : "bg-white text-navy"
        }`}
        onClick={() => {
          setActiveTab(1);
        }}
      >
        Signup
      </button>
    </div>
  );
}

export default AuthTabButtons;
