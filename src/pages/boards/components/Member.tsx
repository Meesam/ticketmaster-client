import React from "react"

const Member = () => {
  return (
    <div className="flex items-center mt-2 p-2 hover:bg-gray-200 w-full cursor-pointer">
      <div className="h-7 w-7  rounded-full bg-purple-700 flex justify-center items-center">
        <p className="text-xs text-white">MZ</p>
      </div>
      <span className="text-sm text-gray-500 ml-2">Meesam Z</span>
      <div className=" ml-auto text-gray-500">
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
            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
          />
        </svg>
      </div>
    </div>
  )
}

export default Member