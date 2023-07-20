import React from 'react'
import MainProductTemplate from '../templates/MainProductTemplate'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'




function MainProductPage() {
  const queryClient = new QueryClient()

  return (
     <QueryClientProvider client={queryClient}>
      <>
        <MainProductTemplate/>
      </>
     </QueryClientProvider>
  )
}

export default MainProductPage