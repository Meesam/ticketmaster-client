import { useQuery } from "@apollo/client"
import React from "react"
import Loading from "../../../common/components/Loading"
import { AuthContext } from "../../../context/AuthContext"
import { GET_CUSTOMER_BY_ID, GET_PROJECTS_BY_OWNER } from "../../../grapql"
import {
  IProjectOwnerResponse,
  IProjectResponse
} from "../../../Types/projectResponse"

const Projects = () => {
  const context = React.useContext(AuthContext)
  const { data } = useQuery(GET_CUSTOMER_BY_ID, {
    variables: { _id: context.user?.customerId }
  })

  const { data: projectData, loading: projectLoading } =
    useQuery<IProjectOwnerResponse>(GET_PROJECTS_BY_OWNER, {
      variables: { projectOwener: context.user?.id }
    })

  if (projectLoading) return <Loading />

  return (
    <div className="flex flex-col">
      <div className=" text-lg font-bold text-black mt-10 ml-10 mb-5">
        {data && data.getCustomerById.name}
      </div>
      <div className="flex ml-10 justify-between">
        <div className="flex">
          <div className="text-sm mr-5 cursor-pointer font-medium border-b-2 border-solid border-blue-700 pb-3">
            Projects
          </div>
          <div className="text-sm mr-5 cursor-pointer font-medium">Users</div>
        </div>
      </div>
      <div className="flex flex-wrap  ml-10 mt-8">
        {projectData &&
          projectData.getProjectsByOwner.map((item: IProjectResponse) => {
            return (
              <div
                key={item._id}
                className="bg-white h-48 w-80 rounded shadow-md mr-7 relative cursor-pointer"
              >
                <div className="flex justify-center items-center absolute h-12 w-12 top-4 rounded-md left-4 bg-red-900 text-white text-2xl">
                  {item.title.charAt(0)}
                </div>
                <div className="text-black font-medium tracking-normal text-lg pl-20 pt-4">
                  {item.title}
                </div>
                <div className="text-gray-500 text-sm pl-20 pt-2">
                  {item.description}
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Projects
