import React from "react"
import Item from "./Item"

const MenuItems = () => {
  return (
    <div className="flex flex-col m-5">
      <div className="flex justify-start">
        <div className="text-sm mr-5 text-gray-600 cursor-pointer font-medium border-b-2 border-solid border-blue-700 pb-3">
          Work items
        </div>
        <div className="text-sm text-gray-600 mr-5 cursor-pointer">
          Pull requests
        </div>
        <div className="text-sm text-gray-600 mr-5 cursor-pointer">
          Favorites
        </div>
      </div>
      <div className=" overflow-y-scroll h-screen/7 pr-3">
        <div className="text-sm mt-6 ml-4 mb-2 ">Assigned to me</div>
        <div className="ml-2 pr-2">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  )
}

export default MenuItems
