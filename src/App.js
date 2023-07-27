import { Outlet, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GNB from './components/GNB';
import Footer from './components/Footer';

const queryClient = new QueryClient();

export default function App() {
  const location = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      {location.pathname !== '/login' && location.pathname !== '/join' && (
        <GNB />
      )}
      <Outlet />
      {location.pathname !== '/login' && location.pathname !== '/join' && (
        <Footer />
      )}
    </QueryClientProvider>
  );
}
