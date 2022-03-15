import React from "react"
import { useHistory } from "react-router-dom"
import Header from "./Header"
import SideBar from "./SideBar"

interface ProjectLayoutProps {
  children?: JSX.Element | JSX.Element[] | string | string[] | React.ReactNode
  rest?: any
}

const ProjectLayout: React.FC = ({ children, ...rest }: ProjectLayoutProps) => {
  const history = useHistory()

  return (
    <div className=" bg-gray-100 h-screen max-h-screen overflow-hidden">
      <Header />
      <div className="flex h-screen max-h-screen">
        <SideBar history={history} />
        {children}
      </div>
    </div>
  )
}

export default ProjectLayout
