import { useQuery } from "@apollo/client"
import React, { memo } from "react"
import Loading from "../../../common/components/Loading"
import { AuthContext } from "../../../context/AuthContext"
import { GET_USER } from "../../../grapql"
import { IUser, IUserResponse } from "../../../Types/user"
import Card from "./Card"

const UserList: React.FC<{}> = () => {
  const context = React.useContext(AuthContext)

  const { data: userData, loading } = useQuery<IUserResponse>(GET_USER, {
    variables: { customerId: context.user?.customerId }
  })
  if (loading) return <Loading />

  return (
    <div className="flex flex-wrap">
      {userData &&
        userData.getUsersByCustomerId.map((item: IUser, idx: number) => (
          <Card item={item} key={item._id}></Card>
        ))}
    </div>
  )
}

export default memo(UserList)
