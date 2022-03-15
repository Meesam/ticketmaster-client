import React from "react"

interface FilterProps {
  setToggleFilter: Function
}

const Filter: React.FC<FilterProps> = ({ setToggleFilter }) => {
  return (
    <div className=" bg-gray-100 h-12 ml-4 mr-4 mt-2 rounded-md flex items-center pl-6">
      <div className="flex items-center">
        <div className="text-gray-400 mr-2">
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
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
        </div>
        <div className="text-gray-500 text-sm">Filter by keyword </div>
      </div>
      <div className="ml-auto flex items-center">
        <div className="mr-6 text-gray-500 text-sm">Types</div>
        <div className="mr-6 text-gray-500 text-sm">Assigned to</div>
        <div className="mr-6 text-gray-500 text-sm">Tags</div>
        <div className="mr-6 text-gray-500 text-sm">Itration</div>
        <div className="mr-6 text-gray-500 text-sm">Area</div>
        <div className="mr-6 text-gray-500 text-sm">Parent Work item</div>
        <div
          className="mr-6 text-gray-500 text-sm"
          onClick={() => setToggleFilter(false)}
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Filter
