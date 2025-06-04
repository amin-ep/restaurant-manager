import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageLoader from "./components/ui/PageLoader";
import { AuthProvider } from "./contexts/AuthContext";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import Layout from "./layout/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import EditPizza from "./pages/EditPizza";

const Login = lazy(() => import("./pages/Login"));
const Menu = lazy(() => import("./pages/Menu"));
const Orders = lazy(() => import("./pages/Orders"));
const Pizza = lazy(() => import("./pages/Pizza"));
const Order = lazy(() => import("./pages/Order"));
const Account = lazy(() => import("./pages/Account"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(() => import("./pages/Home"));

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
        autoClose={3000}
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
                  <Route path="" element={<Home />} />
                  <Route path="menu" element={<Menu />} />
                  <Route path="menu/:id" element={<Pizza />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="orders/:id" element={<Order />} />
                  <Route path="account" element={<Account />} />
                  <Route path="menu/:pizzaId/edit" element={<EditPizza />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
