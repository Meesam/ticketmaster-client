import { gql } from "@apollo/client"

export const USER_LOGIN = gql`
  query loginUser($email:String!, $password:String!) {
    loginUser(email: $email, password: $password) {
      token
      id
      firstName
      lastName
      email
      role
      customerId
      tokenExpireTime
      error {
        fields
        errorMsg
      }
    }
  }
`

export const GET_USER = gql`
   query getUsersByCustomerId($customerId:ID) {
    getUsersByCustomerId(customerId:$customerId){
       _id
       firstName
       lastName
       email
       mobile
       role
       avatar
       dob
     }
   }
`