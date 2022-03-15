import React from "react"

const ProjectStats = () => {
  return (
    <div className=" flex flex-col m-4 ml-7">
      <div className="flex justify-between mb-5">
        <div className="font-medium text-xl">Project stats</div>
        <div className=" border border-solid border-black p-1 text-sm mr-4">
          Last 7 days
        </div>
      </div>
      <div className="flex flex-col mb-5">
        <div className="text-base mb-4">Boards</div>
        <div className="flex justify-between">
          <div className=" flex items-center justify-center">
            <div className="mr-4 h-6 w-6 bg-gray-100 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </div>
            <div className=" flex flex-col">
              <span className="text-gray-500 text-base font-medium">3</span>
              <span className="text-gray-500 text-xs w-20">
                Work items created
              </span>
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <div className="mr-4 h-6 w-6 bg-gray-100 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
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
            </div>
            <div className=" flex flex-col">
              <span className="text-gray-500 text-base font-medium">8</span>
              <span className="text-gray-500 text-xs break-words w-28">
                Work items completed
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-base mb-4">Repos</div>
        <div className="flex justify-between">
          <div className=" flex items-center justify-center">
            <div className="mr-4 h-6 w-6 bg-gray-100 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
                />
              </svg>
            </div>
            <div className=" flex flex-col">
              <span className="text-gray-500 text-base font-medium">0</span>
              <span className="text-gray-500 text-xs w-20">
                Pull requests opened
              </span>
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <div className="mr-4 h-6 w-6 bg-gray-100 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <div className=" flex flex-col">
              <span className="text-gray-500 text-base font-medium">15</span>
              <span className="text-gray-500 text-xs break-words w-28">
                Commits and Changes
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectStats
