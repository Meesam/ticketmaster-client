import { useQuery } from "@apollo/client"
import { Listbox, Transition } from "@headlessui/react"
import React, { Fragment, useState } from "react"
import { Check, ChevronDown } from "react-feather"
import { AuthContext } from "../../context/AuthContext"
import { GET_USER } from "../../grapql"
import { IUser, IUserResponse } from "../../Types/user"

interface IUserDropDownProps {
  handleSelectUser?: (user: IUser) => void
}

const UserDropDown: React.FC<IUserDropDownProps> = ({ handleSelectUser }) => {
  const [selected, setSelected] = useState<IUser>({
    firstName: "Unassigned",
    _id: "0",
    lastName: "",
    email: [""],
    mobile: [""],
    password: "",
    dob: new Date(),
    status: false
  })
  const context = React.useContext(AuthContext)

  const { data: userData } = useQuery<IUserResponse>(GET_USER, {
    variables: { customerId: context.user?.customerId }
  })

  React.useEffect(() => {
    if (selected._id !== "0") {
      handleSelectUser?.(selected)
    }
  }, [selected])

  return (
    <div className="w-72 fixed top-16 z-50">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-3">
          <Listbox.Button className="group flex relative w-full py-1 border border-white hover:border-gray-300 text-left bg-white cursor-default focus:border-gray-300 focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 hidden text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
            <span className="block truncate ml-1">
              {selected.firstName + " " + selected.lastName}
            </span>
            <span className="hidden inset-y-0 right-0 flex items-center pr-2 pointer-events-none group-hover:flex group-hover:absolute group-focus:flex group-focus:absolute">
              <ChevronDown color="#374151" size={16} aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-50 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {userData &&
                userData.getUsersByCustomerId.map((person: IUser) => (
                  <Listbox.Option
                    key={person._id}
                    className={({ active }) =>
                      `${
                        active ? "text-amber-900 bg-amber-100" : "text-gray-900"
                      }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`${
                            selected ? "font-medium" : "font-normal"
                          } block truncate`}
                        >
                          {`${person.firstName} ${person.lastName}`}
                        </span>
                        {selected ? (
                          <span
                            className={`${
                              active ? "text-amber-600" : "text-amber-600"
                            }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                          >
                            <Check
                              color="#CCCCCC"
                              size={16}
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default UserDropDown
