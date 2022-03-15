import { gql } from "@apollo/client"

export const GET_CUSTOMERS = gql`
   query getCustomers {
    getCustomers{
       _id
       website
       name
       contactPerson
       email
       mobile
       address
     }
   }
`

export const GET_CUSTOMER_BY_ID = gql`
  query getCustomerById($_id:ID) {
   getCustomerById(_id:$_id){
       _id
       name
     }
   } 
`