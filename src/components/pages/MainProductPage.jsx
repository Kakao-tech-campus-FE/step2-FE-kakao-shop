import React from 'react'
import MainProductTemplate from '../templates/MainProductTemplate'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'



const queryClient = new QueryClient()

function MainProductPage() {
  return (
     <QueryClientProvider client={queryClient}>
       <MainProductTemplate/>
     </QueryClientProvider>
  )
}

export default MainProductPage