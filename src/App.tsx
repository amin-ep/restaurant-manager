import Layout from "./layout/Layout";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { AuthProvider } from "./contexts/AuthContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import CreatePizzaForm from "./components/createPizzaForm/CreatePizzaForm";
import Pizza from "./pages/Pizza";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 2 * 60 * 1000,
      },
    },
  });
  return (
    <>
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
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="menu" element={<Menu />}>
                  <Route path="create-pizza" element={<CreatePizzaForm />} />
                </Route>
                <Route path="orders" element={<Orders />} />
                <Route path="pizza/:id" element={<Pizza />} />
              </Route>
              <Route path="login" element={<Login />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
