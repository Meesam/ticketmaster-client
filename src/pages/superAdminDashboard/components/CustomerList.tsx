import { useQuery } from "@apollo/client"
import React from "react"
import Loading from "../../../common/components/Loading"
import { GET_CUSTOMERS } from "../../../grapql"
import CustomerCard from "./CustomerCard"

const CustomerList = () => {
  const { data, loading } = useQuery(GET_CUSTOMERS)

  if (loading) return <Loading />
  return (
    <div className="flex flex-wrap">
      {data &&
        data.getCustomers.map((item: any, idx: number) => (
          <CustomerCard item={item} key={idx} />
        ))}
    </div>
  )
}

export default CustomerList
