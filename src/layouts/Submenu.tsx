import React from "react"

const Submenu = () => {
  return (
    <>
      <div className="flex w-full cursor-pointer p-2 hover:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 font-thin text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
        <p className=" text-xs ml-2 cursor-pointer hover:underline">
          WorkItems
        </p>
      </div>
      <div className="flex w-full cursor-pointer p-2 hover:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 font-thin text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
          />
        </svg>
        <p className=" text-xs ml-2 cursor-pointer hover:underline">Boards</p>
      </div>
      <div className="flex w-full cursor-pointer p-2 hover:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 font-thin text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
        <p className=" text-xs ml-2 cursor-pointer hover:underline">Backlogs</p>
      </div>
      <div className="flex w-full cursor-pointer p-2 hover:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 font-thin text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        <p className=" text-xs ml-2 cursor-pointer hover:underline">Sprints</p>
      </div>
      <div className="flex w-full cursor-pointer p-2 hover:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 font-thin text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
        <p className=" text-xs ml-2 cursor-pointer hover:underline">Queries</p>
      </div>
      <div className="flex w-full cursor-pointer p-2 hover:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 font-thin text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          />
        </svg>
        <p className=" text-xs ml-2 cursor-pointer hover:underline">
          Delivery Plans
        </p>
      </div>
      <div className="flex sidebar-itemflex w-full cursor-pointer p-2 hover:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 font-thin text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
        <p className=" text-xs ml-2 cursor-pointer hover:underline">
          Retrospectives
        </p>
      </div>
      <div className="flex w-full cursor-pointer p-2 hover:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 font-thin text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
        <p className=" text-xs ml-2 cursor-pointer hover:underline">Estimate</p>
      </div>
    </>
  )
}

export default Submenu
