import React from "react"
import Logo from "../images/tiaa-icon.jpg"
import MenuList from "./MenuList"
import Search from "./Search"
import UserProfile from "./UserProfile"

const Header = () => {
  return (
    <div className="bg-white p-3 border-b border-solid border-gray-300 flex justify-between">
      <div className="flex">
        <img src={Logo} className="bg-cover h-8 w-8 mr-3" />
        <div className="font-bold text-base mt-1 text-blue-700">
          Ticket Master
        </div>
      </div>
      <div className="flex justify-end w-1/2">
        <Search />
        <MenuList />
        <UserProfile />
      </div>
    </div>
  )
}

export default Header
