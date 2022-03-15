import { Dialog, Menu, Transition } from "@headlessui/react"
import React, { Fragment } from "react"
import {
  CornerUpLeft,
  Maximize2,
  Minimize2,
  MoreHorizontal,
  RefreshCw,
  X,
  XOctagon
} from "react-feather"
import UserDropDown from "../../common/components/UserDropDown"
import { TabProvider } from "../../context/TabContext"
import { TicketContext } from "../../context/TicketContext"
import { IUser } from "../../Types/user"
import ItemTabs from "./component/ItemTabs"
import TicketBody from "./component/TicketBody"

const styles = {
  modal:
    "inline-block max-w-screen-2xl w-full overflow-hidden text-left transition-all transform bg-white shadow-2xl"
}

const Ticket = () => {
  const ticketContext = React.useContext(TicketContext)
  let [isOpen, setIsOpen] = React.useState(true)
  let [modalSize, setModalSiz] = React.useState(styles.modal)
  let [isExpand, setExpand] = React.useState(false)
  const [selectedUser, setUser] = React.useState<IUser | null>(null)

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleSelectUser = (user: IUser) => {
    setUser?.(user)
    ticketContext.setSelectedUser(user)
  }

  const handleSize = () => {
    let maxStyle = !isExpand
      ? "inline-block absolute overflow-hidden h-modal-h w-modal-w left-0 text-left transition-all transform bg-white shadow-2xl"
      : styles.modal
    setExpand(!isExpand)
    setModalSiz(maxStyle)
  }

  const handleTitleChange = (e) => {
    e.preventDefault()
    let title = e.target.value
    ticketContext.setTitle(title)
  }

  return (
    <TabProvider>
      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsOpen(true)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className={`${modalSize}`}>
                <Dialog.Title
                  as="div"
                  className="border-l-8 border-solid border-red-600 sticky"
                >
                  <div className="flex pt-2 pl-2 items-center">
                    <XOctagon color="#DC2626" size={15} />
                    <p className="text-sm ml-2 uppercase text-gray-600">
                      New Bug
                    </p>
                    <div className="ml-auto flex mr-2 items-center">
                      <div className="mr-2 cursor-pointer" onClick={handleSize}>
                        {!isExpand ? (
                          <Maximize2 color="#000" size={14} />
                        ) : (
                          <Minimize2 color="#000" size={16} />
                        )}
                      </div>
                      <X color="#000" size={17} />
                    </div>
                  </div>
                  <div className="ml-2 mt-2 mr-2">
                    <input
                      type="text"
                      placeholder="Enter title"
                      className="w-full outline-none border p-1 border-white hover:border-gray-400 focus:border-blue-500"
                      value={ticketContext.Title}
                      onChange={handleTitleChange}
                    />
                  </div>
                  <div className="flex ml-2 mt-2 items-center">
                    <div>
                      <UserDropDown handleSelectUser={handleSelectUser} />
                    </div>

                    <div className="ml-96 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-sm text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                        />
                      </svg>
                      <p className="text-sm text-gray-500 ml-1">Comments</p>
                    </div>
                    <div className="ml-auto mr-2 flex items-center">
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button className="inline-flex justify-center w-full px-4 py-1 text-sm font-normal text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                              />
                            </svg>
                            Save & Close
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1 ">
                              <Menu.Item>
                                {({ active }) => (
                                  <button className="group flex rounded-md items-center w-full px-2 py-2 text-sm hover:bg-gray-200 hover:text-gray-500">
                                    Save
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                      <div className="ml-4">
                        <RefreshCw color="#64748B" size={17} />
                      </div>
                      <div className="ml-4">
                        <CornerUpLeft color="#64748B" size={17} />
                      </div>
                      <div className="ml-4">
                        <MoreHorizontal color="#64748B" size={17} />
                      </div>
                    </div>
                  </div>
                </Dialog.Title>
                <div className="sticky">
                  <ItemTabs />
                </div>

                <div className="mt-4 overflow-y-scroll h-screen/9">
                  <TicketBody />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </TabProvider>
  )
}

export default Ticket
