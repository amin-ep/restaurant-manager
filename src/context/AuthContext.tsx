import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";

const AuthContext = createContext({
  isLoggedIn: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: (_token: string) => {},
  logout: () => {},
});

function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = async (token: string) => {
    Cookies.set("token", token, {
      expires: 10,
    });
    setIsLoggedIn(true);
  };

  const logout = async () => {
    Cookies.remove("token");
    setIsLoggedIn(false);
  };

  const token = Cookies.get("token");
  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth is used outside the AuthProvider");
  }

  return context;
};

export { useAuth, AuthProvider };
