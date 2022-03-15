import React from "react"
import ProfileItem from "./ProfileItem"

const styles = {
  userClass:
    "absolute bg-white h-52 w-96 top-14 rounded-md shadow-2xl z-50 right-6"
}

const UserProfile = () => {
  const [togglel, setToggle] = React.useState(false)

  const handleToggle = () => {
    setToggle(!togglel)
  }

  return (
    <div
      className=" mr-5 mt-1 text-gray-400 cursor-pointer"
      onClick={handleToggle}
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
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
      <div className={`${styles.userClass} ${togglel ? "block" : "hidden"}`}>
        <ProfileItem />
      </div>
    </div>
  )
}

export default UserProfile
