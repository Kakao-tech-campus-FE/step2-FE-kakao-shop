import { Outlet, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GNB from './components/GNB';

const queryClient = new QueryClient();
function App() {
  const location = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      {location.pathname !== '/login' && location.pathname !== '/join' && (
        <GNB />
      )}
      <Outlet />
    </QueryClientProvider>
  );
}

export default App;
