import React from "react"
import { TicketContext } from "../../../context/TicketContext"
import { Areas, Reasons, State } from "../../../util/lookups"
import Tabs from "./Tabs"

const ItemTabs = () => {
  const ticketContext = React.useContext(TicketContext)

  const handleStateChange = (e) => ticketContext.setState(e.target.value)

  const handleAreaChange = (e) => ticketContext.setArea(e.target.value)

  const handleReasonChange = (e) => ticketContext.setReason(e.target.value)

  return (
    <div className=" bg-gray-100 w-full py-4 px-4 flex items-center border border-gray-200">
      <div className="flex flex-col justify-center w-64">
        <div className="flex items-center mb-2">
          <p className=" text-xs text-gray-500 font-thin mr-8">State</p>
          <div className="group relative inline-block text-gray-700 w-full">
            <select
              className="h-6 pl-1 pr-6 w-full bg-transparent text-sm hover:bg-white placeholder-gray-600 border border-transparent hover:border-gray-200 appearance-none focus:outline-none focus:border-blue-500 focus:bg-white"
              placeholder="Regular input"
              value={ticketContext.State}
              onChange={handleStateChange}
            >
              {State.map((item) => {
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
        <div className="flex items-center">
          <p className="text-xs text-gray-500 font-thin mr-5">Reason</p>
          <div className="group relative inline-block text-gray-700 w-full">
            <select
              className="h-6 pl-1 w-full pr-6 text-sm bg-transparent placeholder-gray-600 border border-transparent hover:border-gray-200 hover:bg-white appearance-none focus:outline-none focus:border-blue-500 focus:bg-white"
              placeholder="Regular input"
              value={ticketContext.Reason}
              onChange={handleReasonChange}
            >
              {Reasons.map((item) => {
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
      <div className="flex flex-col justify-center w-64 ml-20">
        <div className="flex items-center">
          <p className="text-xs text-gray-500 font-thin mr-8">Area</p>
          <div className="group relative inline-block text-gray-700 w-full">
            <select
              className="h-6 w-full pl-1 pr-6 text-sm hover:bg-white bg-transparent placeholder-gray-600 border border-transparent hover:border-gray-200 appearance-none focus:outline-none focus:border-blue-500 focus:bg-white"
              placeholder="Regular input"
              value={ticketContext.Area}
              onChange={handleAreaChange}
            >
              {Areas.map((item) => {
                return <option key={item.id}>{item.title}</option>
              })}
            </select>
            <div className="hidden inset-y-0 right-0 flex items-center px-2 pointer-events-none group-hover:flex group-hover:absolute group-focus:flex group-focus:absolute ">
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
        <div className="flex items-center">
          <p className="text-xs text-gray-500 font-thin mr-5">Itration</p>
          <p className=" text-sm text-gray-500 font-normal">
            Knowledgepoint\Version 1\
          </p>
        </div>
      </div>
      <div className="ml-auto absolute right-0">
        <Tabs />
      </div>
    </div>
  )
}

export default ItemTabs
