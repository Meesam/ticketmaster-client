import React from "react"
import { useHistory } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"

const ProfileItem = (props: any) => {
  const context = React.useContext(AuthContext)
  const history = useHistory()
  const logoutHandler = () => {
    localStorage.clear()
    context.logout()
    history.push("/login")
  }

  return (
    <div className="flex items-center relative">
      <button
        className="text-sm text-gray-600 absolute top-0 right-0 hover:bg-gray-300 p-3 cursor-pointer"
        onClick={logoutHandler}
        type="button"
      >
        Sign Out
      </button>
      <div className="ml-4 mt-12 h-24 w-24 rounded-full bg-green-600 flex justify-center items-center text-white text-4xl">
        {`${context.user?.firstName.charAt(0)}${context.user?.lastName.charAt(
          0
        )}`}
      </div>
      <div className="flex flex-col mt-12 ml-6">
        <div className="text-black font-bold text-lg mb-2">{`${context.user?.firstName} ${context.user?.lastName}`}</div>
        <div className="text-gray-600 text-sm mb-2">{context.user?.email}</div>
        <div className="text-blue-600 text-sm mb-2">View Account</div>
        <div className="text-blue-600 text-sm">Switch directory</div>
      </div>
    </div>
  )
}

export default ProfileItem
