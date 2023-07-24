import OptionColum from "../organisms/OptionColum";
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

const QueryDetail = ({product}) => {
    return (
        <QueryClientProvider client={queryClient}>
         <OptionColum product={product}> </OptionColum>
        </QueryClientProvider>
    );
};

export default QueryDetail;