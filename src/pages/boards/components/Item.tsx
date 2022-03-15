import React from "react"
import { useDrag } from "react-dnd"
import ActionOptions from "./ActionOptions"
import MemberList from "./MemberList"

const styles = {
  hiddenClass: "absolute font-bold bg-blue-200 top-3 right-3 h-5 w-5"
}
const Item = () => {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type: "item"
  }))
  const [isHover, setIsHover] = React.useState(false)

  return (
    <div
      ref={drag}
      className="flex flex-col relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <ActionOptions isHover={isHover} />
      <div className="flex bg-white mx-3 my-3 py-2 pb-6 pl-2 item flex-wrap">
        <div className="text-yellow-300 mr-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path
              fillRule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="text-sm font-medium mr-2">7470</p>
        <span className="text-xs text-gray-400 mr-1">
          SBC - Publish - Code coming in published document (Several cases for
          Brinkley Sargent Wiginton Architects) (Editor/Publish)
        </span>
        <MemberList />
      </div>
    </div>
  )
}

export default Item
