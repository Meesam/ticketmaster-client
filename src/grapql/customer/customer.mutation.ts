import { gql } from "@apollo/client"

export const CREATE_CUSTOMER = gql`
  mutation createCustomer($name: String!,
$website: [String],
$contactPerson: String!,
$email: [String]!,
$mobile: [String]!,
$avatar: String,
$address: String,
$status: String){
    createCustomer(
        name:$name,
        website: $website,
        contactPerson: $contactPerson,
        email:$email,
        mobile:$mobile,
        avatar: $avatar,
        address: $address,
        status:$status){
            _id
            name
            email
            mobile
            website
            contactPerson
            address
        }
}
`