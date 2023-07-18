import ReactDOM from "react-dom/client";
import App from "@/App.jsx";
import { Provider } from "jotai";
import { QueryClient, QueryClientProvider, QueryCache } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.log(error, query);
      if (query.state.data !== undefined) {
        console.log(`에러: ${error.message}`);
      }
    },
  }),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <App />
    </QueryClientProvider>
  </Provider>
);
