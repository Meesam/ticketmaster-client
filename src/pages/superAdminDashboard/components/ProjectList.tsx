import { useQuery } from "@apollo/client"
import { History } from "history"
import React from "react"
import Loading from "../../../common/components/Loading"
import { AuthContext } from "../../../context/AuthContext"
import { GET_PROJECTS_BY_OWNER } from "../../../grapql"
import {
  IProjectOwnerResponse,
  IProjectResponse
} from "../../../Types/projectResponse"

const styles = {
  titleStyle:
    "flex justify-center items-center absolute h-12 w-12 top-4 rounded-md left-4 text-white text-2xl"
}

interface ProjectsListProps {
  history: History
}

const ProjectsList: React.FC<ProjectsListProps> = ({ history }) => {
  const context = React.useContext(AuthContext)

  const { data: projectData, loading: projectLoading } =
    useQuery<IProjectOwnerResponse>(GET_PROJECTS_BY_OWNER, {
      variables: { projectOwener: context.user?.id }
    })

  if (projectLoading) return <Loading />

  const handleClick = (id: string) => history.push(`/project?id=${id}`)

  return (
    <div className="flex flex-wrap">
      {projectData &&
        projectData.getProjectsByOwner.map((item: IProjectResponse) => {
          return (
            <div
              key={item._id}
              className="bg-white h-48 w-80 rounded shadow-md mr-7 relative cursor-pointer mb-4"
              onClick={() => handleClick(item._id)}
            >
              <div
                className={`${styles.titleStyle}`}
                style={{
                  backgroundColor: `#${Math.floor(
                    Math.random() * 16777215
                  ).toString(16)}`
                }}
              >
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
  )
}

export default ProjectsList
