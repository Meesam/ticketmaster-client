import React from "react"

const Loading = () => {
  return (
    <div className="flex fixed top-0 left-0 justify-center items-center  w-screen h-screen z-50 bg-gradient-to-r from-blue-500 to-white">
      <div className="loading">
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loading
