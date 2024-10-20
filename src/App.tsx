import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Meals from "./components/Meals/Meals";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="flex flex-col">
        <Header />
        <Main>
          <Meals />
        </Main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
