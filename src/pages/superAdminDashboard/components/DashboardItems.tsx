import { useQuery } from "@apollo/client"
import { History } from "history"
import React from "react"
import {
  AdminSideBarContext,
  IItem
} from "../../../context/AdminSideBarContext"
import { AuthContext } from "../../../context/AuthContext"
import { GET_CUSTOMER_BY_ID } from "../../../grapql"
import ActionHeader from "./ActionHeader"
import CustomerForm from "./CustomerForm"
import CustomerList from "./CustomerList"
import ProjectForm from "./ProjectForm"
import ProjectsList from "./ProjectList"
import UserForm from "./UserForm"
import UserList from "./UserList"
const styles = {
  itemStyle: "bg-white fixed h-screen right-0 flex flex-col",
  boxStyle:
    " absolute right-7 bottom-0 h-7 w-7 bg-blue-600 cursor-pointer z-50 tran"
}

interface DashboardItemsProps {
  history: History
}

const DashboardItems: React.FC<DashboardItemsProps> = ({ history }) => {
  const context = React.useContext(AuthContext)
  const { data } = useQuery(GET_CUSTOMER_BY_ID, {
    variables: { _id: context.user?.customerId || "0" }
  })

  const [isPopUpOpen, setIsPopUpOpen] = React.useState(false)
  const sideBarConetext = React.useContext(AdminSideBarContext)

  const currentSelectItem = sideBarConetext?.menuItem.filter((item: IItem) => {
    return item.isSelected === true
  })[0].title

  return (
    <div className="flex flex-col w-full">
      <div className=" text-lg font-bold text-black mt-10 ml-10 mb-5">
        {data ? data.getCustomerById.name : "Admin Actions"}
      </div>
      <ActionHeader />
      <div className="ml-10 mt-5 overflow-y-auto h-full">
        {currentSelectItem === "Users" ? (
          <UserList />
        ) : currentSelectItem === "Customers" ? (
          <CustomerList />
        ) : (
          currentSelectItem === "Projects" && <ProjectsList history={history} />
        )}
      </div>

      <div
        className="fixed flex cursor-pointer justify-center w-14 h-14 bottom-10 right-10 bg-blue-600 text-white rounded-full shadow-lg"
        onClick={() => setIsPopUpOpen(true)}
      >
        <p className="mt-1 text-4xl">+</p>
      </div>
      <div
        className={`${styles.itemStyle} ${
          isPopUpOpen
            ? "transition-width duration-200 ease-linear w-96 border-l border-solid border-gray-300"
            : "transition-width duration-200 ease-linear w-0"
        }`}
      >
        <div className="flex justify-between items-center w-full h-14 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex item-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-3 self-center text-green-600 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>

            <p className="text-black font-medium text-lg ml-1">{`Add ${currentSelectItem}`}</p>
          </div>
          <div
            className="text-black mr-4 cursor-pointer"
            onClick={() => setIsPopUpOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        {currentSelectItem === "Users" ? (
          <UserForm onCancel={() => setIsPopUpOpen(false)} />
        ) : currentSelectItem === "Customers" ? (
          <CustomerForm onCancel={() => setIsPopUpOpen(false)} />
        ) : (
          currentSelectItem === "Projects" && (
            <ProjectForm onCancel={() => setIsPopUpOpen(false)} />
          )
        )}
      </div>
    </div>
  )
}

export default DashboardItems
