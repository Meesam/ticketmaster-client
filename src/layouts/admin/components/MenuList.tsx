import React from "react"
import MenuItems from "./MenuItems"

const styles = {
  divClass:
    "absolute bg-white h-screen/6 w-screen/2 top-10 rounded-md shadow-2xl z-50 -right-24"
}

const MenuList = () => {
  const [togglel, setToggle] = React.useState(false)

  const handleToggle = () => {
    setToggle(!togglel)
  }

  return (
    <div
      className=" mr-5 mt-1 text-gray-400 cursor-pointer relative"
      onClick={handleToggle}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 10h16M4 14h16M4 18h16"
        />
      </svg>
      <div className={`${styles.divClass} ${togglel ? "block" : "hidden"}`}>
        <MenuItems />
      </div>
    </div>
  )
}

export default MenuList
