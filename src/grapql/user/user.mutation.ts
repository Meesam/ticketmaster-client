import { gql } from "@apollo/client"

export const CREATE_USER = gql`
    mutation createUser($firstName: String!,
      $lastName: String!
      $email: [String]!
      $mobile: [String]!
      $avatar: String
      $role: String!
      $status: String!) {
            createUser(
                firstName:$firstName,
                lastName:$lastName,
                email:$email,
                mobile:$mobile,
                avatar:$avatar,
                role:$role,
                status:$status
                ) {
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

export const UPDATE_USER = gql`
  mutation updateUser($_id:ID!,$avatar:String!, $firstName:String,$lastName:String,$email:[String],$mobile:[String]){
        updateUser(_id:$_id,avatar:$avatar,firstName:$firstName,lastName:$lastName,email:$email,mobile:$mobile){
              _id
              avatar
              firstName
              lastName
              email
              mobile
        }
  }
`