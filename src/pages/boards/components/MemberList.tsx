import React from "react"
import Member from "./Member"

const MemberList = () => {
  const [memberClick, setMemberClick] = React.useState(false)

  return (
    <div
      className="flex relative hover:bg-gray-100 py-1 px-2 items-center w-full mr-2 justify-between pr-2 mt-2"
      onClick={() => setMemberClick(!memberClick)}
    >
      <div className="flex items-center">
        <div className="h-7 w-7  rounded-full bg-purple-700 flex justify-center items-center">
          <p className="text-xs text-white">MZ</p>
        </div>
        <span className="text-sm text-gray-400 ml-2">Meesam Z</span>
      </div>
      {memberClick && (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      )}
      {memberClick && (
        <div className="flex flex-col absolute top-9 left-0 bg-white border-gray-300 border w-80 h-72 z-50">
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <span className="text-sm text-gray-400 ml-2">Showing 20 results</span>
        </div>
      )}
    </div>
  )
}

export default MemberList
