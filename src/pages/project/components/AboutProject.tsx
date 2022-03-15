import React from "react"

interface IAboutProjectProps {
  projectDetails: any
}

const AboutProject: React.FC<IAboutProjectProps> = ({ projectDetails }) => {
  return (
    <div className="flex flex-col mt-6 pl-6">
      <div className="text-xl font-medium mb-6">About this project</div>
      <div className="text-sm tracking-normal mb-6">
        {projectDetails.getProjectById.description}
      </div>
      <div className="text-sm font-medium mb-2">Languages</div>
      <div className="flex mb-6">
        {projectDetails.getProjectById.tags.map((tag: any, idx: number) => {
          return (
            <div
              key={idx}
              className=" bg-gray-200 rounded-full text-gray-400 text-xs py-1 px-3 mr-2"
            >
              {tag}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AboutProject
