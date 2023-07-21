import getOrders from 'api/getOrders'
import React from 'react'
import { useQuery } from 'react-query'

const OrderResultPage = () => {
    const query = useQuery(
        "getorder",
        getOrders
    )

  return (
    <>
      {query.data && <p>{JSON.stringify(query.data)}</p>}
    </>
  )
}

export default OrderResultPage