import React from "react"
import { TicketContext } from "../../../context/TicketContext"

const SystemInfo = () => {
  const ticketContext = React.useContext(TicketContext)

  const handleFoundinBuildChange = (e) =>
    ticketContext.setFoundinBuild(e.target.value)

  const handleIntegratedinBuildChange = (e) =>
    ticketContext.setIntegratedinBuild(e.target.value)

  return (
    <div className="flex flex-col">
      <div className="mb-2">
        <span className="text-sm">Found in Build</span>
        <input
          type="text"
          className="w-full border border-white hover:border-gray-200 focus:border-blue-500 outline-none p-1 text-sm"
          value={ticketContext.FoundinBuild}
          onChange={handleFoundinBuildChange}
        />
      </div>
      <div className="mb-2">
        <span className="text-sm">Integrated in Build</span>
        <input
          type="text"
          className="w-full border border-white hover:border-gray-200 focus:border-blue-500 outline-none p-1 text-sm"
          value={ticketContext.IntegratedinBuild}
          onChange={handleIntegratedinBuildChange}
        />
      </div>
    </div>
  )
}

export default SystemInfo
