import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={true} />
            <App />
        </QueryClientProvider>
    </>
);
