import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GNB from './components/molecules/GNB';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GNB />
      <Outlet />
    </QueryClientProvider>
  );
}

export default App;
