import { History } from "history"
import React from "react"
import DashboardItems from "./components/DashboardItems"

interface SuperAdminDashboardProps {
  history: History
}
const SuperAdminDashboard: React.FC<SuperAdminDashboardProps> = ({
  history
}) => {
  return <DashboardItems history={history} />
}

export default SuperAdminDashboard
