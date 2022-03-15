import React from "react"
import { TicketContext } from "../../../context/TicketContext"

const Efforts = () => {
  const ticketContext = React.useContext(TicketContext)

  const handleOriginalEstimateChange = (e) =>
    ticketContext.setOriginalEstimate(e.target.value)

  const handleRemainingChange = (e) =>
    ticketContext.setRemaining(e.target.value)

  const handleCompletedChange = (e) =>
    ticketContext.setCompleted(e.target.value)

  const handleTestHoursChange = (e) =>
    ticketContext.setTestHours(e.target.value)

  return (
    <div className="flex flex-col">
      <div className="mb-2">
        <span className="text-sm">Original Estimate</span>
        <input
          type="number"
          className="w-full border border-white hover:border-gray-200 focus:border-blue-500 outline-none p-1 text-sm"
          value={ticketContext.OriginalEstimate}
          onChange={handleOriginalEstimateChange}
        />
      </div>
      <div className="mb-2">
        <span className="text-sm">Remaining</span>
        <input
          type="number"
          className="w-full border border-white hover:border-gray-200 focus:border-blue-500 outline-none p-1 text-sm"
          value={ticketContext.Remaining}
          onChange={handleRemainingChange}
        />
      </div>
      <div className="mb-2">
        <span className="text-sm">Completed</span>
        <input
          type="number"
          className="w-full border border-white hover:border-gray-200 focus:border-blue-500 outline-none p-1 text-sm"
          value={ticketContext.Completed}
          onChange={handleCompletedChange}
        />
      </div>
      <div className="mb-2">
        <span className="text-sm">Test Hours</span>
        <input
          type="number"
          className="w-full border border-white hover:border-gray-200 focus:border-blue-500 outline-none p-1 text-sm"
          value={ticketContext.TestHours}
          onChange={handleTestHoursChange}
        />
      </div>
    </div>
  )
}

export default Efforts
