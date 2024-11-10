import Layout from "./layout/Layout";
// import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
import { AuthProvider } from "./contexts/AuthContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Menu from "./pages/Menu";
// import Orders from "./pages/Orders";
// import Pizza from "./pages/Pizza";
import { DarkModeProvider } from "./contexts/DarkModeContext";
// import Order from "./pages/Order";
import { lazy, Suspense } from "react";
import PageLoader from "./ui/PageLoader";
// import Account from "./pages/Account";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Menu = lazy(() => import("./pages/Menu"));
const Orders = lazy(() => import("./pages/Orders"));
const Pizza = lazy(() => import("./pages/Pizza"));
const Order = lazy(() => import("./pages/Order"));
const Account = lazy(() => import("./pages/Account"));

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 2 * 60 * 1000,
      },
    },
  });
  return (
    <DarkModeProvider>
      <ToastContainer
        limit={4}
        draggable="touch"
        hideProgressBar={true}
        autoClose={6000}
        pauseOnHover={true}
        position="top-right"
      />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <GlobalStyles />
        <BrowserRouter>
          <AuthProvider>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="menu" element={<Menu />} />
                  <Route path="menu/:id" element={<Pizza />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="orders/:id" element={<Order />} />
                  <Route path="account" element={<Account />} />
                </Route>
                <Route path="login" element={<Login />} />
              </Routes>
            </Suspense>
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
