import { Disclosure } from "@headlessui/react"
import { ChevronUpIcon, PlusSmIcon } from "@heroicons/react/solid"
import React from "react"
import TextEditor from "../../../common/components/TextEditor"
import { TicketContext } from "../../../context/TicketContext"
import Efforts from "./Efforts"
import Planning from "./Planning"
import SystemInfo from "./SystemInfo"

const Details = () => {
  const ticketContext = React.useContext(TicketContext)

  const handleReproStepsChanges = (value: any) =>
    ticketContext.setReproSteps(value)

  const handleSystemInfoChanges = (value: any) =>
    ticketContext.setSystemInfo(value)

  const handleDiscussionsChanges = (value: any) =>
    ticketContext.setDiscussion(value)

  return (
    <div className="flex">
      <div className="w-full pt-2">
        <div className="w-full bg-white rounded-2xl">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 border-b border-gray-300 text-sm font-medium text-left text-gray-600 bg-white hover:text-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Repro Steps</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <TextEditor handleChanges={handleReproStepsChanges} />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 border-b border-gray-300 text-sm font-medium text-left text-gray-600 bg-white hover:text-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>SytemInfo</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <TextEditor handleChanges={handleSystemInfoChanges} />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 border-b border-gray-300 text-sm font-medium text-left text-gray-600 bg-white hover:text-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Discussion</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <TextEditor handleChanges={handleDiscussionsChanges} />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
          <Disclosure as="div">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 border-b border-gray-300 text-sm font-medium text-left text-gray-600 bg-white hover:text-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Planning</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <Planning />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 border-b border-gray-300 text-sm font-medium text-left text-gray-600 bg-white hover:text-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Efforts (Hours)</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <Efforts />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
      <div className="w-full pt-2">
        <div className="w-full bg-white rounded-2xl">
          <Disclosure as="div">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 border-b border-gray-300 text-sm font-medium text-left text-gray-600 bg-white hover:text-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Deployment</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 bg-gray-100">
                  To track releases associated with this work item, go to
                  Releases and turn on deployment status reporting for Boards in
                  your pipeline's Options menu. Learn more about deployment
                  status reporting
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 border-b border-gray-300 text-sm font-medium text-left text-gray-600 bg-white hover:text-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Development</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <div className="flex hover:bg-blue-100 w-20 cursor-pointer">
                    <PlusSmIcon className="text-green-400 w-5 h-5" />
                    <p>Add Link</p>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 border-b border-gray-300 text-sm font-medium text-left text-gray-600 bg-white hover:text-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Related Work</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <div className="flex hover:bg-blue-100 w-20 cursor-pointer">
                    <PlusSmIcon className="text-green-400 w-5 h-5" />
                    <p>Add Link</p>
                  </div>
                  <div className="flex bg-gray-100 p-2 text-xs mt-1">
                    Add an existing work item as a parent
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 border-b border-gray-300 text-sm font-medium text-left text-gray-600 bg-white hover:text-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>System Info</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <SystemInfo />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  )
}

export default Details
