import { History } from "history"
import React from "react"
import SidebarHeader from "./SidebarHeader"
import SidebarItems from "./SidebarItems"

const styles = {
  toggleClass: "text-gray-600 font-bold text-4xl flex h-36 flex-col-reverse"
}

const RightIcon = () => {
  return (
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
        d="M13 5l7 7-7 7M5 5l7 7-7 7"
      />
    </svg>
  )
}

const LeftIcon = () => {
  return (
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
        d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
      />
    </svg>
  )
}
interface ISideBarProps {
  history: History
}

const SideBar: React.FC<ISideBarProps> = ({ history }) => {
  const [toggle, setToggle] = React.useState(true)

  return (
    <div className="border-r border-solid border-gray-300 w-72">
      <SidebarHeader history={history} />
      <SidebarItems />
    </div>
  )
}

export default SideBar
