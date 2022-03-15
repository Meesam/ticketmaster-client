import { History } from "history"
import React from "react"
import SideBarItemActions from "./SideBarItemActions"

interface ISideBarHeaderProps {
  history: History
}
const SidebarHeader: React.FC<ISideBarHeaderProps> = ({ history }) => {
  const [menuPop, setMenuPop] = React.useState(false)

  const clickHandler = React.useCallback(() => {
    setMenuPop(!menuPop)
  }, [menuPop])

  /*const clickHandler = (e: React.MouseEvent) => {
    debugger
    setMenuPop(!menuPop)
  }*/
  console.log("menuPop", menuPop)

  return (
    <div className=" flex justify-center items-center w-full border-b pb-2">
      <div className=" h-6 w-6 bg-blue-900 text-white flex justify-center items-center ml-2 mt-2 mr-2 rounded-md text-sm">
        K
      </div>
      <p className="mt-2 text-sm font-semibold">Knowledgepoint</p>
      <div
        id="openIcon"
        className=" ml-auto mt-3 mr-2 relative"
        onClick={clickHandler}
      >
        {menuPop && <SideBarItemActions history={history} />}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
    </div>
  )
}

export default SidebarHeader
