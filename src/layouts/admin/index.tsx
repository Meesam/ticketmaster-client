import React from "react"
import { SideBarProvider } from "../../context/AdminSideBarContext"
import Header from "./components/Header"
import SideBar from "./components/SideBar"

interface SuperAdminDashboardProps {
  children?: JSX.Element | JSX.Element[] | string | string[] | React.ReactNode
  rest?: any
}

const SuperAdminLayout: React.FC<SuperAdminDashboardProps> = ({
  children,
  ...rest
}) => {
  return (
    <SideBarProvider>
      <div className=" bg-gray-100 h-screen max-h-screen overflow-hidden">
        <Header />
        <div className="flex h-screen max-h-screen">
          <SideBar />
          {children}
        </div>
      </div>
    </SideBarProvider>
  )
}

export default SuperAdminLayout
