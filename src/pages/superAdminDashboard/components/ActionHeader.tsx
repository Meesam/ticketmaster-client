import React from "react"
import {
  AdminSideBarContext,
  IItem
} from "../../../context/AdminSideBarContext"
import { AuthContext } from "../../../context/AuthContext"

const styles = {
  itemStyle: "text-sm mr-5 font-medium"
}

interface IActionHeaderProps {
  setCurrentSeletedItem?: Function
}

const ActionHeader: React.FC<IActionHeaderProps> = ({
  setCurrentSeletedItem
}) => {
  const sideBarConetext = React.useContext(AdminSideBarContext)
  const context = React.useContext(AuthContext)
  const onClickHandler = (e: any) => {
    let newItems = sideBarConetext?.menuItem.map((element: IItem) => {
      return element.title === e.target.innerText
        ? { ...element, isSelected: true }
        : { ...element, isSelected: false }
    })
    sideBarConetext?.selectItem(newItems)
  }

  const updtedMenuItem = React.useMemo(() => {
    if (context.user?.role === "Super Admin") {
      return sideBarConetext?.menuItem.filter((item: IItem) => {
        return item.title !== "Projects"
      })
    } else {
      return sideBarConetext?.menuItem.filter((item: IItem) => {
        return item.title !== "Customers"
      })
    }
  }, [context.user?.role, sideBarConetext?.menuItem])

  return (
    <div className="flex ml-10 justify-between">
      <div className="flex">
        {updtedMenuItem.map((item: IItem, idx: number) => {
          return (
            <div
              className={`${styles.itemStyle} ${
                item.isSelected
                  ? "border-b-2 border-solid transition-colors delay-100 ease-in-out border-blue-700 pb-3 cursor-pointer"
                  : "cursor-pointer"
              }`}
              onClick={onClickHandler}
              key={idx}
            >
              {item.title}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ActionHeader
