import React from "react"
import { TicketContext } from "../../../context/TicketContext"
import { Activity, Priority, Severity } from "../../../util/lookups"

const Planning = () => {
  const ticketContext = React.useContext(TicketContext)

  const handleResolvedReasonChange = (e) =>
    ticketContext.setResolvedReason(e.target.value)

  const handlePriorityChange = (e) => ticketContext.setPriority(e.target.value)

  const handleStoryPointsChange = (e) =>
    ticketContext.setStoryPoints(e.target.value)

  const handleSeveritChange = (e) => ticketContext.setSeverity(e.target.value)

  const handleActivityChange = (e) => ticketContext.setActivity(e.target.value)

  return (
    <div className="flex flex-col">
      <div className="mb-2">
        <span className="text-sm">Resolved Reason</span>
        <input
          type="text"
          className="w-full border border-white hover:border-gray-200 focus:border-blue-500 outline-none p-1 text-sm"
          value={ticketContext.ResolvedReason}
          onChange={handleResolvedReasonChange}
        />
      </div>
      <div className="mb-2">
        <span className="text-sm">Story Points</span>
        <input
          type="number"
          className="w-full border border-white hover:border-gray-200 focus:border-blue-500 outline-none p-1 text-sm"
          value={ticketContext.StoryPoints}
          onChange={handleStoryPointsChange}
        />
      </div>
      <div className="mb-2">
        <span className="text-sm">Priority</span>
        <div className="group relative inline-block w-full text-gray-700">
          <select
            className="w-full h-8 pl-1 pr-6 text-sm placeholder-gray-600 border border-white hover:border-gray-200 appearance-none focus:outline-none focus:border-blue-500"
            placeholder="Regular input"
            value={ticketContext.Priority}
            onChange={handlePriorityChange}
          >
            {Priority.map((item, idx) => {
              return <option key={idx}>{item}</option>
            })}
          </select>
          <div className="hidden inset-y-0 right-0 flex items-center px-2 pointer-events-none group-hover:flex group-hover:absolute group-focus:flex group-focus:absolute">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="mb-2">
        <span className="text-sm">Severity</span>
        <div className="group relative inline-block w-full text-gray-700">
          <select
            className="w-full h-8 pl-1 pr-6 text-sm placeholder-gray-600 border border-white hover:border-gray-200 appearance-none focus:outline-none focus:border-blue-500"
            placeholder="Regular input"
            value={ticketContext.Severity}
            onChange={handleSeveritChange}
          >
            {Severity.map((item, idx) => {
              return <option key={item.id}>{item.title}</option>
            })}
          </select>
          <div className="hidden inset-y-0 right-0 flex items-center px-2 pointer-events-none group-hover:flex group-hover:absolute group-focus:flex group-focus:absolute">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="mb-2">
        <span className="text-sm">Activity</span>
        <div className="group relative inline-block w-full text-gray-700">
          <select
            className="w-full h-8 pl-1 pr-6 text-sm placeholder-gray-600 border border-white hover:border-gray-200 appearance-none focus:outline-none focus:border-blue-500"
            placeholder="Regular input"
            value={ticketContext.Activity}
            onChange={handleActivityChange}
          >
            {Activity.map((item) => {
              return <option key={item.id}>{item.title}</option>
            })}
          </select>
          <div className="hidden inset-y-0 right-0 flex items-center px-2 pointer-events-none group-hover:flex group-hover:absolute group-focus:flex group-focus:absolute">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Planning
