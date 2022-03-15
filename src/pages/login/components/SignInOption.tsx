import React from "react"

const SignInOption = () => {
  return (
    <div className="bg-white h-auto w-2/6 flex item-center rounded-sm shadow-lg pt-4 pb-4 hover:bg-gray-200 cursor-pointer">
      <div className="flex ml-8 item-center">
        <div className="mr-4 text-gray-700">
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
              d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
            />
          </svg>
        </div>
        <div className="text-base text-gray-700">Sign-In options</div>
      </div>
    </div>
  )
}

export default SignInOption
