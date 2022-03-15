import React from "react"
import {
  AdminSideBarContext,
  IItem
} from "../../../context/AdminSideBarContext"
import { AuthContext } from "../../../context/AuthContext"

const styles = {
  itemStyle:
    "w-full p-2 mt-3 rounded-sm text-sm border-l-2 border-solid border-gray-600 bg-gray-100 hover:bg-blue-300 hover:text-white cursor-pointer"
}

const SideBar = () => {
  const context = React.useContext(AuthContext)
  const sideBarContext = React.useContext(AdminSideBarContext)
  const onClickhandler = (e: any) => {
    let newItems = sideBarContext?.menuItem.map((element: IItem) => {
      return element.title === e.target.innerText
        ? { ...element, isSelected: true }
        : { ...element, isSelected: false }
    })
    sideBarContext.selectItem(newItems)
  }

  const updtedMenuItem = React.useMemo(() => {
    if (context.user?.role === "Super Admin") {
      return sideBarContext?.menuItem.filter((item: IItem) => {
        return item.title !== "Projects"
      })
    } else {
      return sideBarContext?.menuItem.filter((item: IItem) => {
        return item.title !== "Customers"
      })
    }
  }, [context.user?.role, sideBarContext?.menuItem])

  return (
    <div className="flex flex-col w-1/5 h-full bg-white border-r border-solid border-gray-300 pt-5 relative">
      <>
        {updtedMenuItem.map((item: IItem, idx: number) => {
          return (
            <div
              onClick={onClickhandler}
              key={idx}
              className={`${styles.itemStyle} ${
                item.isSelected ? " bg-blue-600 text-white" : "text-blue-900"
              }`}
            >
              {item.title}
            </div>
          )
        })}
      </>
    </div>
  )
}

export default SideBar
