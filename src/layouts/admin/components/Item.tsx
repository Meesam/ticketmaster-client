import React from "react"

const Item = () => {
  return (
    <div className="flex items-center border-t border-solid border-gray-200 pt-2 pb-3 hover:bg-gray-100">
      <div className=" text-yellow-300 mt-1 mr-5">
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
      <div className="mr-8 flex flex-col">
        <div className="text-blue-500">
          SBC - Editor - Mismatch in published...
        </div>
        <div className="flex text-xs">
          <div className="mr-2">#24135 in </div>
          <div className="text-blue-500">SpecificationNext</div>
        </div>
      </div>
      <div className="text-gray-500 text-sm flex justify-center items-center">
        <div className="w-2 h-2 rounded-full bg-green-600 mr-1"></div>
        <div>In Progress</div>
      </div>
    </div>
  )
}

export default Item
