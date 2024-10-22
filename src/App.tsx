import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <ToastContainer
            autoClose={6000}
            limit={3}
            pauseOnHover={false}
            position="top-center"
            draggable="touch"
          />
          <Routes>
            <Route path="/" element={<Home />} index />
            <Route path="/auth" element={<Auth />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </QueryClientProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
