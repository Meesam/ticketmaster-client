import { useQuery } from "@apollo/client"
import React from "react"
import ReactPlaceholder from "react-placeholder"
import "react-placeholder/lib/reactPlaceholder.css"
import { useLocation } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { GET_PROJECT_BY_ID, GET_USER } from "../../grapql"
import { IUserResponse } from "../../Types/user"
import AboutProject from "./components/AboutProject"
import ProjectMembers from "./components/ProjectMembers"
import ProjectStats from "./components/ProjectStats"

const useQueryString = () => new URLSearchParams(useLocation().search)

const Project = () => {
  let query = useQueryString()
  const context = React.useContext(AuthContext)

  const { data: projectDetails, loading: projectloading } = useQuery(
    GET_PROJECT_BY_ID,
    {
      variables: { _id: query.get("id") }
    }
  )

  const { data: userData, loading: userloading } = useQuery<IUserResponse>(
    GET_USER,
    {
      variables: { customerId: context.user?.customerId }
    }
  )

  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex bg-white h-20 mb-4 shadow-md items-center">
        <ReactPlaceholder
          type="rect"
          ready={!projectloading}
          color="#A78BFA"
          style={{
            width: 56,
            height: 56,
            marginLeft: "16px",
            borderRadius: "6px"
          }}
        >
          <div className="h-14 w-14 flex justify-center items-center bg-purple-800 rounded-md ml-4 text-xl text-white font-medium">
            {projectDetails && projectDetails.getProjectById.title.charAt(0)}
          </div>
        </ReactPlaceholder>

        <div className=" text-2xl font-bold text-black ml-4">
          {projectDetails && projectDetails.getProjectById.title}
        </div>
        <div className=" text-black ml-auto mr-4 pt-2 px-3 py-2 bg-gray-200 cursor-pointer flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <div className="text-black text-sm ml-2">Private</div>
        </div>
        <div className="mr-4 text-yellow-500 font-thin cursor-pointer hover:bg-gray-100 h-8 w-8 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </div>
      </div>
      <div className="grid grid-rows-4 grid-flow-col gap-4 ">
        <div className="row-span-2 col-span-2 bg-white rounded-md shadow-md ml-4">
          {projectDetails && <AboutProject projectDetails={projectDetails} />}
        </div>
        <div className="row-span-2 col-span-2 bg-white rounded-md shadow-md ml-4">
          {userData && <ProjectMembers userData={userData} />}
        </div>
        <div className="row-span-4 bg-white mr-4 h-96 rounded-md shadow-md">
          <ProjectStats />
        </div>
      </div>
    </div>
  )
}

export default Project
