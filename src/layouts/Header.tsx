import React from "react"
import MenuList from "./admin/components/MenuList"
import Search from "./admin/components/Search"
import UserProfile from "./admin/components/UserProfile"
import Logo from "./admin/images/tiaa-icon.jpg"

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
