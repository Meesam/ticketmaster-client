import React from "react"
import { IUser, IUserResponse } from "../../../Types/user"

interface IProjectMembersProps {
  userData: IUserResponse
}

const ProjectMembers: React.FC<IProjectMembersProps> = ({ userData }) => {
  return (
    <div className="flex flex-col mt-6 pl-6">
      <div className="text-xl font-medium mb-6">Members</div>
      <div className="flex mb-6">
        {userData.getUsersByCustomerId.map((item: IUser) => {
          return (
            <div
              key={item._id}
              title={`${item.firstName} ${item.lastName}`}
              className="w-14 h-14 mr-4 rounded-full flex justify-center items-center cursor-default"
              style={{
                backgroundColor: `#${Math.floor(
                  Math.random() * 16777215
                ).toString(16)}`
              }}
            >
              <p className="text-white">{`${item.firstName?.charAt(
                0
              )}${item.lastName?.charAt(0)}`}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectMembers
